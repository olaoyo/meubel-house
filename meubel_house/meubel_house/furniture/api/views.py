from django.http import JsonResponse

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from rest_framework.generics import ListAPIView

from meubel_house.furniture.furniture import furnitures

routes = ["api/shop", "api/furniture/create"]


@api_view(["GET"])
def getRoutes(request):
    return Response(routes)
    

@api_view(["GET"])
@permission_classes([AllowAny])
def getFurnitures(request):
    return Response(furnitures)


@api_view(["GET"])
@permission_classes([AllowAny])
def getFurniture(request, furniture_id):
    furniture = None
    for mueble in furnitures:
        if mueble["id"] == furniture_id:
            furniture = mueble
            break

    return Response(furniture)