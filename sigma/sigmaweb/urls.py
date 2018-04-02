from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'aboutus/', views.aboutus, name='aboutus'),
    url(r'dashboard/', views.dashboard, name='dashboard'),
    url(r'faq/', views.faq, name='faq'),
    url(r'login/', views.login, name='login'),
    url(r'register/', views.register, name='register'),
    url(r'scheduler/', views.scheduler, name='scheduler'),
    url(r'timeline/', views.timeline, name='timeline'),
]
