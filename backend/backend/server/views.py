from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from backend.server.models import Text
from backend.server.serializers import TextSerializer


class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all().order_by('-date_joined')
    serializer_class = TextSerializer
    permission_classes = [permissions.IsAuthenticated]
