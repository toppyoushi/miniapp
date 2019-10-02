"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from mod import mod_views
from django.conf.urls import include,url

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('api/checkSession/',mod_views.checkSession),
    path('api/register/',mod_views.register),
    path('api/login/',mod_views.user_login),
    path('api/getvcode/',mod_views.getVcode),
    path('api/index/',mod_views.index),
    path('api/user_info/',mod_views.user_info),
    path('api/account_info/',mod_views.account_info),
    path('api/preg_record/',mod_views.preg_record),
    path('api/mate_record/',mod_views.mate_record),
    path('api/diag_record/',mod_views.diag_record),
]
