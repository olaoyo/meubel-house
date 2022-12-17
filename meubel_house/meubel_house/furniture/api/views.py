from django.http import JsonResponse

# Function Based
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

# Class Based
from rest_framework.generics import ListAPIView, RetrieveAPIView

# Function & Class
from rest_framework.permissions import AllowAny

from meubel_house.furniture.models import Furniture
from . serializers import FurnitureSerializer

    
# List View
# Function Based
@api_view(["GET"])
@permission_classes([AllowAny])
def get_furnitures(request):
    furnitures = Furniture.objects.all()
    serializer = FurnitureSerializer(furnitures, many=True)
    return Response(serializer.data)
    

# Class Based
class FurnituresListView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = FurnitureSerializer
    
    def get_queryset(self):
        return Furniture.objects.all()



# Details View
# Function Based
@api_view(["GET"])
@permission_classes([AllowAny])
def get_furniture(request, furniture_id):
    furniture = Furniture.objects.get(_id=furniture_id)
    serializer = FurnitureSerializer(furniture, many=False)
    return Response(serializer.data)


# Class Based
class FurnitureDetailsView(RetrieveAPIView):
    permission_classes = [AllowAny]
    serializer_class = FurnitureSerializer

    def get_queryset(self):
        return Furniture.objects.all()