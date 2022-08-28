from django.contrib import admin
from django.urls import path
from meet import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('wemeet-1/', views.wemeet_1, name='wemeet-1'),
    path('wemeet-2/', views.wemeet_2, name='wemeet-2'),
    path('wemeet-3/', views.wemeet_3, name='wemeet-3'),
    path('finalResult/', views.finalResult, name='finalResult'),
]