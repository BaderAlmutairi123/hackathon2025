from django.urls import path
from .views import fetch_services

urlpatterns = [
    path('fetch-services/', fetch_services),
]