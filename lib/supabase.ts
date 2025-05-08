import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-url-polyfill'

const supabaseUrl = 'https://zjzepiyjznaxeehswkzu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqemVwaXlqem5heGVlaHN3a3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMDcyNDMsImV4cCI6MjA2MTU4MzI0M30.cKoO5_NsOYCA_NYzMibW9C9695HaLOIv_9d5T2Vo0Gk';

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});