from django.urls import path, include
from . import views
from .views import router

app_name = 'api_xp'

urlpatterns = [
    path('', include(router.urls)),
]