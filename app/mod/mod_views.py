from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.contrib.auth import authenticate,login
from .models import User,Cow,Record
from django.contrib.auth.decorators import login_required
import datetime

# Create your views here.

def checkSession(request):
    resp={'status':2000,'check':True}
    return JsonResponse(resp)

def checkVcode(uname,vcode):
    if vcode=='0000':
        return True
    return False 

def register(request):
    if request.method=='POST':
        args=request.POST
        uname=args.get('uname',None)
        pwd=args.get('pwd',None)
        fname=args.get('fname',None)
        degree=args.get('degree',None)
        tel=args.get('tel',None)
        vcode=args.get('vcode',None)
        if not checkVcode(uname,vcode):
            resp={'status':4000,'vcode':False}
            return JsonResponse(resp)
        User.objects.create(username=uname,password=pwd,fram=fname,is_staff=degree,tel=tel)
        resp={'status':2000,'register':True}
        return JsonResponse(resp)
    else:
        return JsonResponse(getVcode(request))


def getVcode(request):
    resp={'status':2000,'vcode':'0000'}
    return JsonResponse(resp)  


def user_login(request):
    if request.method=='POST':
        args=request.POST
        uname=args.get('uname',None)
        pwd=args.get('pwd',None)
        vcode=args.get('vcode',None)
        if not checkVcode(uname,vcode):
            resp={'status':3000,'login':False}
            return JsonResponse(resp)
        user=authenticate(username=uname,password=pwd)
        if user:
            login(request,user)
            resp={"status":2000,'login':True}
        else:
            resp={'status':3000,'login':False}
            return JsonResponse(resp)
    else:
        return JsonResponse(getVcode(request))


@login_required(login_url='/api/userlogin')
def index(request):
    if request.method=='GET':
        user=request.user
        record=User.objects.fliter(username=user.uname)
        resp={'status':2000,'res':record}
        return JsonResponse(record)
    else:
        resp={'status':3000,'api':False}
        return JsonResponse(resp)
        
@login_required(login_url='/api/userlogin')
def user_info(request):
    if request.method=='POST':
        args=request.POST
        uname=args.get('uname',None)
        fname=args.get('fname',None)
        user=request.user
        if user.is_authenticated() and user.username==uname:
            User.objects.get(username=uname).update(fname=fname)
            resp={'status':2000,'update':True}
            return JsonResponse(resp)
        else:
            resp={'status':3000,'error':'user error'}
            return JsonResponse(resp)
    else:
        resp={'status':3000,'api':False}
        return JsonResponse(resp)

@login_required(login_url='/api/userlogin')
def account_info(request):
    if request.method=='POST':
        args=request.POST
        uname=args.get('uname',None)
        pwd=args.get('pwd',None)
        user=request.user
        if user.is_authenticated() and user.username==uname:
            User.objects.get(username=uname).update(password=pwd)
            resp={'status':2000,'update':True}
            return JsonResponse(resp)
        else:
            resp={'status':3000,'error':'user error'}
            return JsonResponse(resp)
    else:
        resp={'status':3000,'api':False}
        return JsonResponse(resp)

@login_required(login_url='/api/userlogin')
def preg_record(request):
    if request.method=='POST':
        args=request.POST
        pid=args.get('pid',None)
        date=args.get('date',None)
        time3=args.get('time3',None)
        time4=args.get('time4',None)
        organ=args.get('organ',None)
        time6=args.get('time6',None)
        time7=args.get('time7',None)
        di=args.get('difficulty',None)
        intact=args.get('intact',None)
        gender=args.get('gender',None)
        weight=args.get('weight',None)
        es=args.get('estivalue',None)
        rid=Record.objects.create(time=datetime.datetime(),uname=request.user.username,ttype=0).rid
        Cow.objects.create(cid=pid,ptime=date,wtime=time3,water_time=time4,
            organ=organ,out_time=time6,head_time=time7,di=di,tai=intact,
            sex=gender,weight=weight,rid=rid)
        resp={'status':2000,'newrecord':True}
        return JsonResponse(resp)
    else:
        resp={'status':3000,'api':False}
        return JsonResponse(resp)

@login_required(login_url='/api/userlogin')   
def mate_record(request):
    if request.method=='GET':
        args=request.POST
        pid=args.get('pid',None)
        user=request.user
        rid=Record.objects.filter(pid=pid,uname=user.username).order_by('time')[-1]
        res=Cow.objects.get(rid=rid)
        resp={'status':2000,'res':res.ptime}
        return JsonResponse(resp)
    else:
        resp={'status':3000,'api':False}
        return JsonResponse(resp)

@login_required(login_url='/api/userlogin')
def diag_record(request):
    if request.method=='GET':
        args=request.POST
        pid=args.get('pid',None)
        user=request.user
        rid=Record.objects.filter(pid=pid,uname=user.username).order_by('time')[-1]
        res=Cow.objects.get(rid=rid)
        resp={'status':2000,'res':{'preg_time':res.ptime,'love_time':'00'}}
        return JsonResponse(resp)
    else:
        resp={'status':3000,'api':False}
        return JsonResponse(resp)



    