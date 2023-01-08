from django.contrib import admin
from django.urls import path
from WCApp.views import inputpage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('input/',inputpage),
]
