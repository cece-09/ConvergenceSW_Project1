from dataclasses import field
from .models import Text
from rest_framework import serializers


class TextSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Text
        fields = ('title', 'body')
