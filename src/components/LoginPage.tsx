import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Logo } from './Logo';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Toaster, toast } from "sonner";
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLogin?: () => void;
}

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface ApiResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    [key: string]: any;
  };
}

declare global {
  interface ImportMetaEnv {
    readonly VITE_API_URL: string;
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  });

  const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/auth';
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLogin && !formData.name) {
      toast.error('Please enter your name / Apna naam daalein');
      return;
    }
    if (!formData.email || !formData.password) {
      toast.error('Please fill all fields / Tamam fields bharein');
      return;
    }

    setLoading(true);
    try {
      const url = isLogin ? `${API_BASE}/login` : `${API_BASE}/register`;
      const res = await axios.post<ApiResponse>(url, {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      const data = res.data;
      localStorage.setItem('hm_token', data.token);
      localStorage.setItem('hm_user', JSON.stringify(data.user));

      toast.success(
        isLogin
          ? 'Login successful! / Login kamyab raha!'
          : 'Account created! / Account ban gaya!',
        { description: 'Welcome to HealthMate / Sehat ka safar mubarak' }
      );

      setTimeout(() => {
        onLogin?.();
        navigate('/dashboard');
      }, 1000);
    } catch (err) {
      console.error(err);
      const error = err as AxiosError<{ message: string }>;
      const msg = error.response?.data?.message || 'Server error / Kuch ghalti hui hai';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#00BFA5] to-[#0F2D5F] relative overflow-hidden items-center justify-center p-12"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-64 h-64 bg-white/10 rounded-full -top-20 -left-20"
            animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-40 -right-40"
            animate={{ y: [0, -40, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 text-white text-center">
          <motion.h1
            className="text-4xl mb-4 font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            💙 HealthMate
          </motion.h1>
          <p className="text-xl text-white/90">Sehat ka Smart Dost</p>
        </div>
      </motion.div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <motion.div
          className="w-full max-w-md"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8 text-center">
              <Logo className="justify-center mb-4" />
              <h2 className="text-3xl text-gray-800 mb-2">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h2>
              <p className="text-gray-600">
                {isLogin ? 'Khush Aamdeed!' : 'Naya Account Banaein'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <Label htmlFor="name">Full Name / Poora Naam</Label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="pl-10 border-gray-300 focus:border-[#00BFA5] focus:ring-[#00BFA5]"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </motion.div>
              )}

              <div>
                <Label htmlFor="email">Email / Email Address</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10 border-gray-300 focus:border-[#00BFA5] focus:ring-[#00BFA5]"
                    value={formData.email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password / Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    className="pl-10 pr-10 border-gray-300 focus:border-[#00BFA5] focus:ring-[#00BFA5]"
                    value={formData.password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#00BFA5] to-[#0F2D5F] hover:opacity-90 transition-opacity"
              >
                {loading
                  ? 'Please wait...'
                  : isLogin
                  ? 'Login / Dakhil Hon'
                  : 'Sign Up / Register Karen'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#00BFA5] hover:underline"
              >
                {isLogin
                  ? "Don't have an account? Sign Up / Account nahi? Register karein"
                  : 'Already have an account? Login / Pehle se account hai? Login karein'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
