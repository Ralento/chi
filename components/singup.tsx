import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

const SignupScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Error', 'Por favor, completa todos los campos.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
            return;
        }
        // Aquí va tu lógica para registrar el usuario, por ejemplo, llamada a tu API
        Alert.alert('¡Éxito!', 'Cuenta creada correctamente.');
    };

    return (
        <View className="flex-1 justify-center items-center bg-gradient-to-b from-blue-100 to-white px-6">
            <View className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
                <Text className="text-3xl font-extrabold text-blue-700 mb-6 text-center">Crear cuenta</Text>
                <TextInput
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="w-full border border-blue-200 rounded-xl p-4 mb-4 text-base bg-blue-50 focus:bg-white"
                    placeholderTextColor="#60a5fa"
                />
                <TextInput
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="w-full border border-blue-200 rounded-xl p-4 mb-4 text-base bg-blue-50 focus:bg-white"
                    placeholderTextColor="#60a5fa"
                />
                <TextInput
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    className="w-full border border-blue-200 rounded-xl p-4 mb-6 text-base bg-blue-50 focus:bg-white"
                    placeholderTextColor="#60a5fa"
                />
                <TouchableOpacity
                    className="bg-blue-600 w-full py-4 rounded-xl shadow-md active:bg-blue-700"
                    onPress={handleSignup}
                >
                    <Text className="text-white text-center font-semibold text-lg tracking-wide">Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignupScreen;