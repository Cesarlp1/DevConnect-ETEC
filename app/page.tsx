"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  BookOpen,
  Upload,
  CalendarIcon,
  MessageSquare,
  Users,
  ThumbsUp,
  Bell,
  Settings,
  FileText,
  Brain,
  GraduationCap,
  Star,
  Award,
  Briefcase,
  Building,
  Megaphone,
  CalendarCheck,
  MapPin,
  Link,
  Clock,
  TrendingUp,
  Timer,
  Video,
  PlayCircle,
} from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function EtecbookApp() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [userType, setUserType] = useState<"student" | "partner" | "staff" | null>(null)
  const [loginData, setLoginData] = useState({ email: "", password: "", cnpj: "", institutionalId: "" })

  // Dados mockados para demonstração
  const [userProfile, setUserProfile] = useState({
    name: "João Silva",
    age: 20,
    city: "São Paulo",
    course: "Análise e Desenvolvimento de Sistemas",
    semester: "4º Semestre",
    avatar: "/placeholder.svg?height=100&width=100&text=JS",
    coverImage: "/placeholder.svg?height=200&width=800&text=Sua+Capa+Personalizada",
    bio: "Sou um estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia e inovação. Busco sempre aprender e aplicar novos conhecimentos em projetos desafiadores.",
  })

  const assignments = [
    { id: 1, title: "Projeto de Banco de Dados", dueDate: "2024-02-15", status: "pending", timeLeft: "3 dias" },
    { id: 2, title: "Algoritmos de Ordenação", dueDate: "2024-02-20", status: "submitted", timeLeft: "8 dias" },
    { id: 3, title: "Interface Web Responsiva", dueDate: "2024-02-25", status: "pending", timeLeft: "13 dias" },
  ]

  const tccIdeas = [
    { id: 1, title: "Sistema de Gestão Escolar", votes: 15, category: "Web Development" },
    { id: 2, title: "App de Controle Financeiro", votes: 12, category: "Mobile Development" },
    { id: 3, title: "IA para Análise de Dados", votes: 8, category: "Data Science" },
  ]

  const events = [
    { date: "2024-02-18", title: "Feira de Tecnologia", type: "feira" },
    { date: "2024-02-22", title: "Prova de Programação", type: "prova" },
    { date: "2024-02-28", title: "Workshop React", type: "workshop" },
  ]

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40&text=AC",
      time: "2h atrás",
      content: "Acabei de finalizar meu projeto de e-commerce! 🛒✨",
      image: "/placeholder.svg?height=300&width=400&text=E-commerce+Project",
      likes: 24,
      comments: 8,
      type: "photo",
    },
    {
      id: 2,
      author: "Carlos Silva",
      avatar: "/placeholder.svg?height=40&width=40&text=CS",
      time: "4h atrás",
      content: "Primeira vez programando em Python! Que linguagem incrível 🐍",
      image: "/placeholder.svg?height=300&width=400&text=Python+Code",
      likes: 18,
      comments: 5,
      type: "work",
    },
    {
      id: 3,
      author: "Beatriz Santos",
      avatar: "/placeholder.svg?height=40&width=40&text=BS",
      time: "6h atrás",
      content: "Dia de apresentação do TCC! Nervosa mas animada 🎓",
      image: "/placeholder.svg?height=300&width=400&text=TCC+Presentation",
      likes: 45,
      comments: 12,
      type: "milestone",
    },
  ])

  const [workSubmissions, setWorkSubmissions] = useState([
    {
      id: 1,
      author: "João Silva",
      title: "Sistema de Gestão Escolar",
      description: "Aplicação web completa para gerenciamento de escola",
      image: "/placeholder.svg?height=200&width=300&text=School+Management",
      likes: 32,
      comments: 7,
      aiScore: 8.5,
      tags: ["React", "Node.js", "MySQL"],
    },
    {
      id: 2,
      author: "Maria Santos",
      title: "App de Controle Financeiro",
      description: "Aplicativo mobile para controle de gastos pessoais",
      image: "/placeholder.svg?height=200&width=300&text=Finance+App",
      likes: 28,
      comments: 5,
      aiScore: 9.1,
      tags: ["React Native", "Firebase"],
    },
  ])

  const [internshipVacancies, setInternshipVacancies] = useState([
    {
      id: 1,
      company: "Tech Solutions Ltda.",
      role: "Estagiário Desenvolvedor Front-end",
      description: "Buscamos estagiário para atuar com React e Next.js.",
      requirements: "Conhecimento em HTML, CSS, JavaScript e React.",
      location: "São Paulo - SP",
      link: "#",
    },
    {
      id: 2,
      company: "Data Insights S.A.",
      role: "Estagiário Analista de Dados",
      description: "Oportunidade para atuar com análise de dados e SQL.",
      requirements: "Conhecimento em SQL, Python e Excel.",
      location: "Remoto",
      link: "#",
    },
  ])

  const [lectureInvitations, setLectureInvitations] = useState([
    {
      id: 1,
      company: "Inovatech",
      title: "O Futuro da Inteligência Artificial no Desenvolvimento",
      date: "2024-03-10",
      time: "19:00",
      speaker: "Dr. Ana Paula Mendes",
      link: "#",
    },
    {
      id: 2,
      company: "CyberSec Corp.",
      title: "Segurança da Informação para Desenvolvedores",
      date: "2024-03-25",
      time: "14:00",
      speaker: "Eng. Ricardo Almeida",
      link: "#",
    },
  ])

  const [companyVisits, setCompanyVisits] = useState([
    {
      id: 1,
      company: "Global Software",
      date: "2024-04-05",
      time: "10:00",
      description: "Visita guiada à sede da empresa e bate-papo com desenvolvedores.",
      slots: 20,
      registered: 12,
    },
    {
      id: 2,
      company: "Cloud Innovations",
      date: "2024-04-15",
      time: "15:00",
      description: "Conheça nossa infraestrutura de cloud e projetos de ponta.",
      slots: 15,
      registered: 5,
    },
  ])

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Introdução ao React Hooks",
      author: "Lucas Fernandes",
      avatar: "/placeholder.svg?height=30&width=30&text=LF",
      thumbnail: "/placeholder.svg?height=150&width=250&text=React+Hooks",
      views: "1.2K",
      likes: 85,
      comments: 12,
      duration: "15:30",
    },
    {
      id: 2,
      title: "Desvendando o SQL: Joins e Subqueries",
      author: "Mariana Oliveira",
      avatar: "/placeholder.svg?height=30&width=30&text=MO",
      thumbnail: "/placeholder.svg?height=150&width=250&text=SQL+Joins",
      views: "980",
      likes: 70,
      comments: 8,
      duration: "10:45",
    },
    {
      id: 3,
      title: "Primeiros Passos com Node.js e Express",
      author: "Gabriel Costa",
      avatar: "/placeholder.svg?height=30&width=30&text=GC",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Node.js+Express",
      views: "1.5K",
      likes: 110,
      comments: 15,
      duration: "20:00",
    },
  ])

  const handleCoverImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setUserProfile((prev) => ({ ...prev, coverImage: imageUrl }))
    }
  }

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setUserProfile((prev) => ({ ...prev, avatar: imageUrl }))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setUserProfile((prev) => ({ ...prev, [id]: value }))
  }

  if (userType === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-blue-900">DevConnect ETEC</CardTitle>
            <CardDescription>Sua rede social acadêmica da ETEC</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Institucional</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu.email@etec.sp.gov.br"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Sua senha"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setUserType("student")}>
              Entrar como Aluno
            </Button>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">ou</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cnpj">CNPJ da Empresa</Label>
              <Input
                id="cnpj"
                type="text"
                placeholder="XX.XXX.XXX/XXXX-XX"
                value={loginData.cnpj}
                onChange={(e) => setLoginData({ ...loginData, cnpj: e.target.value })}
              />
            </div>
            <Button variant="outline" className="w-full bg-transparent" onClick={() => setUserType("partner")}>
              Entrar como Parceiro
            </Button>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">ou</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="institutional-id">ID Institucional</Label>
              <Input
                id="institutional-id"
                type="text"
                placeholder="Seu ID de Coordenador/Professor"
                value={loginData.institutionalId}
                onChange={(e) => setLoginData({ ...loginData, institutionalId: e.target.value })}
              />
            </div>
            <Button
              variant="secondary"
              className="w-full bg-gray-700 hover:bg-gray-800 text-white"
              onClick={() => setUserType("staff")}
            >
              Entrar como Equipe
            </Button>
            <p className="text-xs text-center text-gray-600">Acesso restrito para alunos e empresas parceiras</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-blue-900">DevConnect ETEC</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Button variant="ghost" onClick={() => setUserType(null)}>
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="feed">Feed</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="trabalhos">Trabalhos</TabsTrigger>
            <TabsTrigger value="tcc">TCC & Ideias</TabsTrigger>
            <TabsTrigger value="agenda">Agenda</TabsTrigger>
            <TabsTrigger value="comunidade">Comunidade</TabsTrigger>
            <TabsTrigger value="parceiros">Parceiros</TabsTrigger>
            <TabsTrigger value="videos">Vídeos</TabsTrigger>
            <TabsTrigger value="perfil">Perfil</TabsTrigger>
            {userType === "staff" && <TabsTrigger value="admin">Administração</TabsTrigger>}
          </TabsList>

          {/* Feed Social */}
          <TabsContent value="feed" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Feed Principal */}
              <div className="lg:col-span-2 space-y-6">
                {/* Criar Post */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <Textarea
                        placeholder="Compartilhe suas conquistas, projetos ou dúvidas com a turma..."
                        rows={2}
                        className="flex-1"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-1" />
                          Foto
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Trabalho
                        </Button>
                      </div>
                      <Button size="sm">Publicar</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Posts do Feed */}
                {posts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-0">
                      {/* Header do Post */}
                      <div className="p-4 pb-0">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar>
                            <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                            <AvatarFallback>
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium">{post.author}</p>
                            <p className="text-sm text-gray-600">{post.time}</p>
                          </div>
                          <Badge variant="outline">
                            {post.type === "photo" ? "📸" : post.type === "work" ? "💻" : "🎓"}
                          </Badge>
                        </div>
                        <p className="mb-3">{post.content}</p>
                      </div>

                      {/* Imagem do Post */}
                      <div className="relative">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt="Post"
                          className="w-full h-64 object-cover cursor-pointer hover:opacity-95 transition-opacity"
                        />
                      </div>

                      {/* Ações do Post */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-red-600 hover:text-red-700">
                              <ThumbsUp className="h-5 w-5" />
                              <span className="font-medium">{post.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                              <MessageSquare className="h-5 w-5" />
                              <span>{post.comments}</span>
                            </button>
                          </div>
                        </div>

                        {/* Comentários */}
                        <div className="space-y-2 pt-2 border-t">
                          <div className="flex items-start gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarFallback className="text-xs">MJ</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 bg-gray-50 rounded-lg p-2">
                              <p className="text-sm">
                                <span className="font-medium">Maria João:</span> Parabéns! Ficou incrível! 👏
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                              <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                              <AvatarFallback className="text-xs">JS</AvatarFallback>
                            </Avatar>
                            <Input placeholder="Escreva um comentário..." className="flex-1 h-8" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar Direita */}
              <div className="space-y-6">
                {/* Trabalhos em Destaque */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🏆 Trabalhos em Destaque</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {workSubmissions.slice(0, 2).map((work) => (
                      <div key={work.id} className="space-y-2">
                        <img
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-95"
                        />
                        <div>
                          <p className="font-medium text-sm">{work.title}</p>
                          <p className="text-xs text-gray-600">por {work.author}</p>
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3 text-red-500" />
                              <span className="text-xs">{work.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span className="text-xs">{work.aiScore}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Alunos Online */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🟢 Alunos Online</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: "Ana Costa", status: "Estudando React" },
                        { name: "Pedro Lima", status: "Fazendo TCC" },
                        { name: "Carla Santos", status: "Online" },
                        { name: "Bruno Silva", status: "Programando" },
                      ].map((student, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="relative">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="text-xs">
                                {student.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{student.name}</p>
                            <p className="text-xs text-gray-600">{student.status}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Conquistas Recentes */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">🎖️ Conquistas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { achievement: "Primeiro TCC aprovado!", user: "Maria Santos" },
                        { achievement: "10 trabalhos com nota máxima", user: "João Silva" },
                        { achievement: "Projeto mais curtido do mês", user: "Ana Costa" },
                      ].map((item, index) => (
                        <div key={index} className="p-2 bg-yellow-50 rounded-lg">
                          <p className="text-sm font-medium">{item.achievement}</p>
                          <p className="text-xs text-gray-600">{item.user}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Dashboard */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Trabalhos Pendentes</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Próximo prazo em 3 dias</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Análises IA</CardTitle>
                  <Brain className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Trabalhos analisados este mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Progresso TCC</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">65%</div>
                  <Progress value={65} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Timer className="h-5 w-5" />
                    Próximas Entregas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {assignments
                    .filter((a) => a.status === "pending")
                    .map((assignment) => (
                      <div
                        key={assignment.id}
                        className="flex items-center justify-between p-3 bg-orange-50 rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{assignment.title}</p>
                          <p className="text-sm text-gray-600">
                            Prazo: {format(new Date(assignment.dueDate), "dd/MM/yyyy", { locale: ptBR })}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-orange-600 border-orange-600">
                          {assignment.timeLeft}
                        </Badge>
                      </div>
                    ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    Próximos Eventos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-600">
                          {format(new Date(event.date), "dd/MM/yyyy", { locale: ptBR })}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trabalhos */}
          <TabsContent value="trabalhos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Enviar Trabalho para Análise IA
                </CardTitle>
                <CardDescription>Faça upload do seu trabalho e receba feedback inteligente em minutos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título do Trabalho</Label>
                    <Input id="title" placeholder="Ex: Sistema de Gestão de Biblioteca" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Disciplina</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a disciplina" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bd">Banco de Dados</SelectItem>
                        <SelectItem value="prog">Programação</SelectItem>
                        <SelectItem value="web">Desenvolvimento Web</SelectItem>
                        <SelectItem value="mobile">Desenvolvimento Mobile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea id="description" placeholder="Descreva brevemente seu trabalho..." rows={3} />
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Arraste e solte seus arquivos aqui ou clique para selecionar
                  </p>
                  <p className="text-xs text-gray-500">Suporta: .pdf, .docx, .zip, .rar (máx. 50MB)</p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Brain className="mr-2 h-4 w-4" />
                  Analisar com IA
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Galeria de Trabalhos da Turma
                </CardTitle>
                <CardDescription>Veja, curta e comente os trabalhos dos seus colegas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {workSubmissions.map((work) => (
                    <div key={work.id} className="border rounded-lg overflow-hidden">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full h-48 object-cover cursor-pointer hover:opacity-95"
                      />
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-medium">{work.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{work.description}</p>
                            <p className="text-xs text-gray-500">por {work.author}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                            <Brain className="h-3 w-3 text-green-600" />
                            <span className="text-sm font-medium text-green-600">{work.aiScore}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {work.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-red-600 hover:text-red-700">
                              <ThumbsUp className="h-4 w-4" />
                              <span className="text-sm">{work.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
                              <MessageSquare className="h-4 w-4" />
                              <span className="text-sm">{work.comments}</span>
                            </button>
                          </div>
                          <Button variant="outline" size="sm">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Histórico de Análises</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Sistema CRUD em PHP", date: "10/02/2024", score: 8.5, status: "Aprovado" },
                    { title: "Algoritmo de Busca", date: "05/02/2024", score: 7.2, status: "Revisar" },
                    { title: "Interface React", date: "28/01/2024", score: 9.1, status: "Excelente" },
                  ].map((analysis, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{analysis.title}</p>
                        <p className="text-sm text-gray-600">{analysis.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="font-bold">{analysis.score}</span>
                        </div>
                        <Badge
                          variant={
                            analysis.status === "Excelente"
                              ? "default"
                              : analysis.status === "Aprovado"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {analysis.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TCC & Ideias */}
          <TabsContent value="tcc" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Meu Progresso TCC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progresso Geral</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} />
                  </div>

                  <div className="space-y-3">
                    {[
                      { phase: "Escolha do Tema", completed: true },
                      { phase: "Revisão Bibliográfica", completed: true },
                      { phase: "Metodologia", completed: true },
                      { phase: "Desenvolvimento", completed: false },
                      { phase: "Testes", completed: false },
                      { phase: "Documentação Final", completed: false },
                    ].map((phase, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full ${phase.completed ? "bg-green-500" : "bg-gray-300"}`}
                        ></div>
                        <span className={phase.completed ? "text-green-700" : "text-gray-600"}>{phase.phase}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Continuar TCC
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5" />
                    Votação de Ideias
                  </CardTitle>
                  <CardDescription>Vote nas melhores ideias para TCC da turma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tccIdeas.map((idea) => (
                    <div key={idea.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{idea.title}</p>
                        <Badge variant="outline">{idea.category}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {idea.votes}
                        </Button>
                      </div>
                    </div>
                  ))}

                  <Button variant="outline" className="w-full bg-transparent">
                    Propor Nova Ideia
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Biblioteca de Recursos</CardTitle>
                <CardDescription>Materiais compartilhados pela comunidade para auxiliar nos trabalhos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Guia de Metodologia Científica", type: "PDF", downloads: 45 },
                    { title: "Templates de Documentação", type: "ZIP", downloads: 32 },
                    { title: "Artigos sobre IA", type: "Pasta", downloads: 28 },
                    { title: "Exemplos de Código", type: "GitHub", downloads: 67 },
                    { title: "Normas ABNT", type: "PDF", downloads: 89 },
                    { title: "Banco de Dados Exemplo", type: "SQL", downloads: 23 },
                  ].map((resource, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-sm">{resource.title}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>{resource.type}</span>
                        <span>{resource.downloads} downloads</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Agenda */}
          <TabsContent value="agenda" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Calendário Acadêmico</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    locale={ptBR}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Próximos Eventos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {events.map((event, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                        {format(new Date(event.date), "dd")}
                      </div>
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-gray-600">
                          {format(new Date(event.date), "EEEE, dd 'de' MMMM", { locale: ptBR })}
                        </p>
                        <Badge variant="outline" className="mt-1">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Adicionar Evento Pessoal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-title">Título do Evento</Label>
                    <Input id="event-title" placeholder="Ex: Reunião de grupo" />
                  </div>
                  <div className="space-y-2">
                    <Label>Data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          locale={ptBR}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-description">Descrição</Label>
                  <Textarea id="event-description" placeholder="Detalhes do evento..." />
                </div>
                <Button className="w-full">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  Adicionar à Agenda
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comunidade */}
          <TabsContent value="comunidade" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Fórum da Turma
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea placeholder="Compartilhe uma dúvida, dica ou conquista com a turma..." rows={3} />
                  <Button>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Publicar
                  </Button>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  {[
                    {
                      author: "Maria Santos",
                      time: "2h atrás",
                      content:
                        "Pessoal, alguém tem dicas para otimizar consultas SQL? Estou com dificuldades no projeto de BD.",
                      likes: 5,
                      comments: 3,
                    },
                    {
                      author: "Pedro Lima",
                      time: "5h atrás",
                      content:
                        "Acabei de terminar meu sistema em React! Quem quiser dar uma olhada e dar feedback, me chama no privado 🚀",
                      likes: 12,
                      comments: 7,
                    },
                  ].map((post, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{post.author}</p>
                          <p className="text-xs text-gray-600">{post.time}</p>
                        </div>
                      </div>
                      <p className="text-sm mb-3">{post.content}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <button className="flex items-center gap-1 hover:text-blue-600">
                          <ThumbsUp className="h-4 w-4" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-600">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Links Úteis</CardTitle>
                <CardDescription>Acesso rápido a ferramentas e comunicação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                    <span>WhatsApp Professores</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                    <Users className="h-6 w-6 text-blue-600" />
                    <span>Discord da Turma</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    <span>Portal ETEC</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                    <FileText className="h-6 w-6 text-orange-600" />
                    <span>Biblioteca Digital</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Parceiros */}
          <TabsContent value="parceiros" className="space-y-6">
            {userType === "partner" ? (
              // Partner Dashboard
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      Dashboard do Parceiro
                    </CardTitle>
                    <CardDescription>Gerencie suas oportunidades para os alunos da ETEC</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <h3 className="text-lg font-semibold">Publicar Nova Vaga de Estágio</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="vacancy-role">Cargo</Label>
                        <Input id="vacancy-role" placeholder="Ex: Estagiário Desenvolvedor Back-end" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vacancy-location">Localização</Label>
                        <Input id="vacancy-location" placeholder="Ex: São Paulo - SP ou Remoto" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vacancy-description">Descrição da Vaga</Label>
                      <Textarea
                        id="vacancy-description"
                        placeholder="Detalhes da vaga, responsabilidades..."
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vacancy-requirements">Requisitos</Label>
                      <Textarea
                        id="vacancy-requirements"
                        placeholder="Habilidades e conhecimentos necessários..."
                        rows={2}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vacancy-link">Link para Inscrição</Label>
                      <Input id="vacancy-link" placeholder="URL para o formulário de inscrição" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Publicar Vaga
                    </Button>

                    <h3 className="text-lg font-semibold mt-8">Convidar para Palestra/Workshop</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="lecture-title">Título da Palestra</Label>
                        <Input id="lecture-title" placeholder="Ex: Introdução ao Machine Learning" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lecture-speaker">Palestrante</Label>
                        <Input id="lecture-speaker" placeholder="Nome do palestrante" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Data</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-transparent"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              locale={ptBR}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lecture-time">Horário</Label>
                        <Input id="lecture-time" placeholder="Ex: 19:00" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lecture-description">Descrição</Label>
                      <Textarea
                        id="lecture-description"
                        placeholder="Detalhes da palestra, tópicos abordados..."
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lecture-link">Link de Acesso/Inscrição</Label>
                      <Input id="lecture-link" placeholder="URL para a transmissão ou inscrição" />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Megaphone className="mr-2 h-4 w-4" />
                      Convidar para Palestra
                    </Button>

                    <h3 className="text-lg font-semibold mt-8">Agendar Visita Empresarial</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Data da Visita</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal bg-transparent"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              locale={ptBR}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="visit-time">Horário</Label>
                        <Input id="visit-time" placeholder="Ex: 10:00" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="visit-description">Descrição da Visita</Label>
                      <Textarea id="visit-description" placeholder="O que os alunos verão na visita..." rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="visit-slots">Vagas Disponíveis</Label>
                      <Input id="visit-slots" type="number" placeholder="Número de vagas" />
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <CalendarCheck className="mr-2 h-4 w-4" />
                      Agendar Visita
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              // Student View of Partner Opportunities
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      Vagas de Estágio
                    </CardTitle>
                    <CardDescription>Oportunidades de estágio exclusivas para alunos da ETEC</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {internshipVacancies.map((vacancy) => (
                      <div key={vacancy.id} className="p-4 border rounded-lg space-y-2">
                        <h3 className="font-bold text-lg">{vacancy.role}</h3>
                        <p className="text-sm text-gray-700">
                          <Building className="inline-block h-4 w-4 mr-1 text-gray-500" />
                          {vacancy.company}
                        </p>
                        <p className="text-sm text-gray-600">
                          <MapPin className="inline-block h-4 w-4 mr-1 text-gray-500" />
                          {vacancy.location}
                        </p>
                        <p className="text-sm">{vacancy.description}</p>
                        <p className="text-xs text-gray-500">**Requisitos:** {vacancy.requirements}</p>
                        <Button variant="link" className="p-0 h-auto">
                          <Link className="h-4 w-4 mr-1" />
                          <a href={vacancy.link} target="_blank" rel="noopener noreferrer">
                            Ver Detalhes e Candidatar
                          </a>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Megaphone className="h-5 w-5" />
                      Palestras e Workshops
                    </CardTitle>
                    <CardDescription>Eventos online e presenciais com especialistas do mercado</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {lectureInvitations.map((lecture) => (
                      <div key={lecture.id} className="p-4 border rounded-lg space-y-2">
                        <h3 className="font-bold text-lg">{lecture.title}</h3>
                        <p className="text-sm text-gray-700">
                          <Building className="inline-block h-4 w-4 mr-1 text-gray-500" />
                          {lecture.company}
                        </p>
                        <p className="text-sm text-gray-600">
                          <CalendarIcon className="inline-block h-4 w-4 mr-1 text-gray-500" />
                          {format(new Date(lecture.date), "dd/MM/yyyy", { locale: ptBR })} às {lecture.time}
                        </p>
                        <p className="text-sm text-gray-600">
                          <Users className="inline-block h-4 w-4 mr-1 text-gray-500" />
                          Palestrante: {lecture.speaker}
                        </p>
                        <Button variant="link" className="p-0 h-auto">
                          <Link className="h-4 w-4 mr-1" />
                          <a href={lecture.link} target="_blank" rel="noopener noreferrer">
                            Inscrever-se / Acessar
                          </a>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarCheck className="h-5 w-5" />
                      Visitas Empresariais
                    </CardTitle>
                    <CardDescription>Conheça o dia a dia de grandes empresas de tecnologia</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {companyVisits.map((visit) => (
                      <div key={visit.id} className="p-4 border rounded-lg space-y-2">
                        <h3 className="font-bold text-lg">{visit.company}</h3>
                        <p className="text-sm text-gray-700">
                          <CalendarIcon className="inline-block h-4 w-4 mr-1 text-gray-500" />
                          {format(new Date(visit.date), "dd/MM/yyyy", { locale: ptBR })} às {visit.time}
                        </p>
                        <p className="text-sm">{visit.description}</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>
                            Vagas: {visit.registered}/{visit.slots}
                          </span>
                          <Button size="sm" disabled={visit.registered >= visit.slots}>
                            {visit.registered >= visit.slots ? "Lotado" : "Inscrever-se"}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Vídeos */}
          <TabsContent value="videos" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Publicar Novo Vídeo
                </CardTitle>
                <CardDescription>Compartilhe tutoriais, dicas ou projetos em vídeo com a comunidade</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="video-title">Título do Vídeo</Label>
                  <Input id="video-title" placeholder="Ex: Tutorial de Git e GitHub para Iniciantes" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="video-description">Descrição</Label>
                  <Textarea id="video-description" placeholder="Descreva o conteúdo do seu vídeo..." rows={3} />
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Arraste e solte seu arquivo de vídeo aqui ou clique para selecionar
                  </p>
                  <p className="text-xs text-gray-500">Suporta: .mp4, .mov, .avi (máx. 200MB)</p>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Video className="mr-2 h-4 w-4" />
                  Publicar Vídeo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Galeria de Vídeos ADS
                </CardTitle>
                <CardDescription>
                  Assista e aprenda com vídeos da comunidade sobre Análise e Desenvolvimento de Sistemas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-40 object-cover cursor-pointer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                          <PlayCircle className="h-12 w-12 text-white opacity-80 hover:opacity-100 cursor-pointer" />
                        </div>
                        <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </Badge>
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-base mb-1 line-clamp-2">{video.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={video.avatar || "/placeholder.svg"} alt={video.author} />
                            <AvatarFallback className="text-xs">
                              {video.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span>{video.author}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-2">
                            <span>{video.views} visualizações</span>
                            <span className="mx-1">•</span>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span>{video.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-3 w-3" />
                              <span>{video.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Perfil */}
          <TabsContent value="perfil" className="space-y-6">
            <Card className="shadow-2xl">
              {" "}
              {/* Adicionado shadow-2xl aqui */}
              <CardHeader className="relative p-0 h-48 rounded-t-lg overflow-hidden">
                <img
                  src={userProfile.coverImage || "/placeholder.svg"}
                  alt="Capa do Perfil"
                  className="w-full h-full object-cover"
                />
                <input
                  type="file"
                  id="cover-image-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleCoverImageChange}
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-2 right-2 z-10"
                  onClick={() => document.getElementById("cover-image-upload")?.click()}
                >
                  Alterar Capa
                </Button>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-20">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                    <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                    <AvatarFallback className="text-4xl">JS</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6 pt-20">
                {" "}
                {/* Adjusted padding-top */}
                <input
                  type="file"
                  id="profile-image-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />
                <div className="flex justify-center mt-4">
                  <Button variant="outline" onClick={() => document.getElementById("profile-image-upload")?.click()}>
                    Alterar Foto de Perfil
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" value={userProfile.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Idade</Label>
                    <Input id="age" value={userProfile.age} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" value={userProfile.city} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="semester">Semestre</Label>
                    <Input id="semester" value={userProfile.semester} disabled />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biografia</Label>
                  <Textarea
                    id="bio"
                    placeholder="Conte um pouco sobre você, seus interesses e objetivos..."
                    rows={4}
                    value={userProfile.bio || ""}
                    onChange={handleChange}
                  />
                </div>
                <Button className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  Salvar Alterações
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estatísticas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">15</div>
                    <div className="text-sm text-gray-600">Trabalhos Enviados</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">8.2</div>
                    <div className="text-sm text-gray-600">Média IA</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">23</div>
                    <div className="text-sm text-gray-600">Posts no Fórum</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">65%</div>
                    <div className="text-sm text-gray-600">Progresso TCC</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="admin" className="space-y-6">
            {userType === "staff" ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Painel de Administração
                  </CardTitle>
                  <CardDescription>Gerencie usuários, conteúdos e configurações da plataforma.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                      <Users className="h-6 w-6 text-blue-600" />
                      <span>Gerenciar Alunos</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                      <Briefcase className="h-6 w-6 text-green-600" />
                      <span>Gerenciar Parceiros</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                      <FileText className="h-6 w-6 text-purple-600" />
                      <span>Moderar Trabalhos</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                      <Video className="h-6 w-6 text-red-600" />
                      <span>Gerenciar Vídeos</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                      <CalendarIcon className="h-6 w-6 text-orange-600" />
                      <span>Gerenciar Eventos</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2 bg-transparent">
                      <Bell className="h-6 w-6 text-yellow-600" />
                      <span>Enviar Notificações</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Acesso Restrito</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Você não tem permissão para acessar esta área. Por favor, faça login como membro da equipe.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
