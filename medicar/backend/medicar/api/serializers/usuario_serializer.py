from rest_framework import serializers
from ..models import Usuario


class UsuarioCadastroSerializer(serializers.Serializer):
    email = serializers.EmailField()
    nome = serializers.CharField(required=False)
    password = serializers.CharField()
    confirm_password = serializers.CharField()

    def validate_email(self, email):
        existing = Usuario.objects.filter(email=email).first()
        if existing:
            raise serializers.ValidationError("Email já cadastrado.")
        return email

    def validate(self, data):
        if not data.get('password') or not data.get('confirm_password'):
            raise serializers.ValidationError("Infome uma senha e a confirmação da senha")

        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError("Senhas não são iguais")

        return data


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'email', 'nome', 'password',)

    def create(self, validated_data):
        user = super(UsuarioSerializer, self).create(validated_data)
        user.set_password(validated_data["password"])
        user.save()
        return user
