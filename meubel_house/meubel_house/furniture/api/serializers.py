from rest_framework import serializers
from meubel_house.users.models import User
from meubel_house.furniture.models import Furniture, Review, Order, OrderItem, ShippingAddress

class FurnitureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = "__all__"