from django.conf import settings
from django.urls import path 
from rest_framework.routers import DefaultRouter, SimpleRouter

from meubel_house.users.api.views import UserViewSet
from meubel_house.furniture.api import views

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)



app_name = "api"

urlpatterns = [
     path("routes/", views.getRoutes),
     path("shop/", views.getFurnitures),
     path("shop/furniture/<str:furniture_id>/", views.getFurniture),
]
 
urlpatterns += router.urls
