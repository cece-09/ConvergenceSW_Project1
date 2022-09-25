from django.contrib import admin
from .models import Text


class TextAdmin(admin.ModelAdmin):
    list_display = ('title', 'body')


admin.site.register(Text, TextAdmin)
