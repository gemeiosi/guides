from django.urls import path
from .views import GuideView

urlpatterns = [
    path('guides/', GuideView.as_view())
]
