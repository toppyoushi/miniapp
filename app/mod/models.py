from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime

# Create your models here.
class User(AbstractUser):
    tel = models.CharField(max_length=20, unique=False, verbose_name='手机号')
    farm = models.CharField(max_length=64, unique=False, verbose_name='农场')

class Record(models.Model):
    rid= models.AutoField(verbose_name='表单号',primary_key=True)
    ttype=models.IntegerField(unique=False,verbose_name='记录类型')
    '''
        0：产犊记录
        1：配种记录
        2：妊娠诊断记录
        3.产奶记录
        4：生长发育记录
        5：DHI取样记录
        6：谱系档案
        7：其他
    '''
    time=models.TimeField(unique=False,verbose_name='提交时间')
    uname=models.CharField(max_length=64,unique=False,verbose_name='提交用户')

class Cow(models.Model):
    cid= models.BigIntegerField(unique=True,verbose_name='母牛号')
    ptime=models.DateField(unique=False,verbose_name='分娩时间')
    wtime=models.TimeField(unique=False,verbose_name='开始流水时间')
    water_time=models.TimeField(unique=False,verbose_name='开始流水时间')
    head_time=models.TimeField(unique=False,verbose_name='胎儿露出时间')
    organ=models.CharField(max_length=64,unique=False,verbose_name='露出器官')
    out_time=models.TimeField(unique=False,verbose_name='胎儿娩出时间')
    wtime=models.TimeField(unique=False,verbose_name='胎儿排出时间')
    di=models.IntegerField(unique=False,verbose_name='产犊难易度')
    tai=models.BooleanField(unique=False,verbose_name='胎衣是否完整')
    sex=models.BooleanField(unique=False,verbose_name='犊牛性别')
    weight=models.IntegerField(unique=False,verbose_name='犊牛体重')
    rid=models.BigIntegerField(unique=True,verbose_name='表单号')