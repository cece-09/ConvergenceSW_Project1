import datetime
from operator import mod

from django.db import models
from django.utils import timezone

class Text(models.Model) :
    title = models.CharField(max_length=120)
    body = models.TextField()

    def _str_(self) :
        return self.title

class Place(models.Model) :
    address = models.TextField()
    lat = models.FloatField()
    lng = models.FloatField()
    def _str_(self) :
        return self.address


# class defying
class MMMM1(models.Model): #table1 일반음식점,
    index_id = models.IntegerField() #"번호"
    occd_id = models.SmallIntegerField() #"상세영업상태코드",
    occd_class = models.CharField(max_length=4) #"상세영업상태명",
    tel = models.CharField(max_length=12) #"소재지전화",
    addr1 = models.CharField(max_length=100) #"소재지전체주소",
    addr2 = models.CharField(max_length=100) #"도로명전체주소",
    addr3 = models.IntegerField() #"도로명우편번호",
    pl_name = models.CharField(max_length=50) #"사업장명",
    category = models.CharField(max_length=10) #"업태구분명",
    coord_x = models.FloatField() #"좌표정보(x)",
    coord_y = models.FloatField() #"좌표정보(y)",
    arrnd_area = models.CharField(max_length=20) #"영업장주변구분명",
    hp_url = models.URLField(max_length=50) #"홈페이지"
    
    def __str__(self):
        return self.pl_name

class MMMM2(models.Model): #table2 제과점영업,
    index_id = models.IntegerField() #"번호" 1
    occd_id = models.SmallIntegerField() #"상세영업상태코드", 10
    occd_class = models.CharField(max_length=4) #"상세영업상태명", 11
    tel = models.CharField(max_length=12) #"소재지전화", 16
    addr1 = models.CharField(max_length=100) #"소재지전체주소", 19
    addr2 = models.CharField(max_length=100) #"도로명전체주소", 20
    addr3 = models.IntegerField() #"도로명우편번호", 21
    pl_name = models.CharField(max_length=50) #"사업장명", 22
    category = models.CharField(max_length=10) #"업태구분명", 26
    coord_x = models.FloatField() #"좌표정보(x)", 27
    coord_y = models.FloatField() #"좌표정보(y)", 28
    arrnd_area = models.CharField(max_length=20) #"영업장주변구분명", 32
    hp_url = models.URLField(max_length=50) #"홈페이지" 47
    
    def __str__(self):
        return self.pl_name

class MMMM3(models.Model): #table3 휴게음식점,
    index_id = models.IntegerField() #"번호"
    occd_id = models.SmallIntegerField() #"상세영업상태코드",
    occd_class = models.CharField(max_length=4) #"상세영업상태명",
    tel = models.CharField(max_length=12) #"소재지전화",
    addr1 = models.CharField(max_length=100) #"소재지전체주소",
    addr2 = models.CharField(max_length=100) #"도로명전체주소",
    addr3 = models.IntegerField() #"도로명우편번호",
    pl_name = models.CharField(max_length=50) #"사업장명",
    category = models.CharField(max_length=10) #"업태구분명",
    coord_x = models.FloatField() #"좌표정보(x)",
    coord_y = models.FloatField() #"좌표정보(y)",
    arrnd_area = models.CharField(max_length=20) #"영업장주변구분명",
    hp_url = models.URLField(max_length=50) #"홈페이지"
    
    def __str__(self):
        return self.pl_name

class MMMM4(models.Model): #table4 즉석판매제조가공업,
    index_id = models.IntegerField() #"번호"
    occd_id = models.SmallIntegerField() #"상세영업상태코드",
    occd_class = models.CharField(max_length=4) #"상세영업상태명",
    tel = models.CharField(max_length=12) #"소재지전화",
    addr1 = models.CharField(max_length=100) #"소재지전체주소",
    addr2 = models.CharField(max_length=100) #"도로명전체주소",
    addr3 = models.IntegerField() #"도로명우편번호",
    pl_name = models.CharField(max_length=50) #"사업장명",
    category = models.CharField(max_length=10) #"업태구분명",
    coord_x = models.FloatField() #"좌표정보(x)",
    coord_y = models.FloatField() #"좌표정보(y)",
    arrnd_area = models.CharField(max_length=20) #"영업장주변구분명",
    hp_url = models.URLField(max_length=50) #"홈페이지"
    
    def __str__(self):
        return self.pl_name

class NNNN(models.Model): #출발지추천
    index_id = models.IntegerField #index
    a_name = models.CharField(max_length=100) #장소이름
    a_addr = models.CharField(max_length=100) #세부주소
    a_crdx = models.FloatField() #좌표x
    a_crdy = models.FloatField() #좌표y

class PPPP(models.Model):
    index_id = models.IntegerField() #index
    a_name = models.CharField(max_length=100) #약속이름
    a_pl_cat = models.SmallIntegerField() #일반음식점,제과점영업,휴게음식점,즉석판매제조가공업,유통판매업
    a_pl_id = models.IntegerField() #약속장소참조
    a_date = models.DateTimeField('date published') #약속생성날짜
    a_key = models.IntegerField() #고유키