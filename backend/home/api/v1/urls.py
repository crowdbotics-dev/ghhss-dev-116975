from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BvhffhViewSet,BvhffhViewSet,BvhffhViewSet,BvhffhViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('bvhffh', BvhffhViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
