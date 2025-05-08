import React, { useState } from "react";
import { View } from "react-native";
import { Layout, Text, TextInput, Button, } from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function LoginScreen({ }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();


    const handleLogin = async () => {
        setLoading(true);
        setError("");
        // Simula autenticación
        setTimeout(() => {
            if (email === "test@demo.com" && password === "123456") {
                setLoading(false);
                // Aquí navegarías a la app principal (ejemplo: navigation.replace("home"))
                router.replace("//inicio");
                alert("¡Login exitoso!");
            } else {
                setLoading(false);
                setError("Email o contraseña incorrectos");
                router.replace("//singup");
            }
        }, 1200);
    };

    return (
        <Layout>
            <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
                <Text size="h2" fontWeight="bold" style={{ marginBottom: 20 }}>
                    Iniciar Sesión
                </Text>
                <Text>Email</Text>
                <TextInput
                    className={"mb-22"}
                    placeholder="Ingresa tu email"
                    value={email}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                />
                <Text>Contraseña</Text>
                <TextInput
                    className={"mb-20"}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                />
                {error.length > 0 && (
                    <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
                )}
                <Button
                    text={loading ? "Ingresando..." : "Ingresar"}
                    rightContent={
                        <Ionicons name="arrow-forward" size={20} color={"white"} />
                    }
                    onPress={handleLogin}
                    disabled={loading}
                />
                <Button className={"mt-30"}
                        text={"Registrarse"}

                />
            </View>
        </Layout>
    );
}