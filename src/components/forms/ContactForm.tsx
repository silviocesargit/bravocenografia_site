'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/email-schema'
import Button from '@/components/ui/Button'
import { useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
      {/* Nome */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Nome *</label>
        <input
          type="text"
          placeholder="Seu nome"
          {...register('name')}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
        <input
          type="email"
          placeholder="seu@email.com"
          {...register('email')}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Telefone */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Telefone</label>
        <input
          type="tel"
          placeholder="(11) 99999-9999"
          {...register('phone')}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Assunto */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Assunto *</label>
        <input
          type="text"
          placeholder="Assunto da mensagem"
          {...register('subject')}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      {/* Mensagem */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Mensagem *</label>
        <textarea
          placeholder="Sua mensagem..."
          rows={5}
          {...register('message')}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500">
          ✓ Mensagem enviada com sucesso! Obrigado pelo contato.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500">
          ✗ Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.
        </div>
      )}

      {/* Botão Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        variant="primary"
        size="lg"
        className="w-full"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>

      <p className="text-xs text-muted-foreground text-center">* Campos obrigatórios</p>
    </form>
  )
}
