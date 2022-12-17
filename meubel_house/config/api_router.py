from django.conf import settings
from django.urls import path 
from rest_framework.routers import DefaultRouter, SimpleRouter

from meubel_house.users.api.views import UserViewSet
from meubel_house.furniture.api.views import *

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)



app_name = "api"

urlpatterns = [
     path("shop/", get_furnitures),
    #  path("shop/", FurnituresListView.as_view()),

     path("shop/furniture/<str:furniture_id>/", get_furniture),
    #  path("shop/furniture/<pk>/", FurnitureDetailsView.as_view()),
]
 
urlpatterns += router.urls
