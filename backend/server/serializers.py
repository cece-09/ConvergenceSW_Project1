from dataclasses import field
from .models import Text
from .models import Place
from rest_framework import serializers

class TextSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Text
        fields = ('title', 'body')

class PlaceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Place
        field = ('address', 'lat', 'lng')