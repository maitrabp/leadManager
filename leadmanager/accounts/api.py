from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
# we created these
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer


# generics takes care of a lot of stuff, no need to write abstractions
class RegisterAPI(generics.GenericAPIView):  # Register API
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        # send back any errors if not valid
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # returns a token with a created/registered user
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):  # Login API
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data

        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # returns a token with a created/registered user
            "token": AuthToken.objects.create(user)[1]
        })


class UserAPI(generics.RetrieveAPIView):  # Get User API
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def get_object(self):  # gives back user associated with the token
        return self.request.user
