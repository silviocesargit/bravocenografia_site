import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/email-schema'

export async function POST(request: NextRequest) {
  try {
    // Verificar se a API key está configurada
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const body = await request.json()

    // Validar dados
    const validatedData = contactFormSchema.parse(body)

    // Importar Resend apenas em tempo de runtime
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    // Enviar email
    const { error } = await resend.emails.send({
      from: 'Bravo Cenografia <onboarding@resend.dev>', // Mude para seu email verificado no Resend
      to: process.env.CONTACT_EMAIL || 'contato@bravocenografia.com',
      replyTo: validatedData.email,
      subject: `Novo contato: ${validatedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C9A24D; margin-bottom: 20px;">Novo Contato recebido</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Nome:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Telefone:</strong> ${validatedData.phone}</p>` : ''}
            <p><strong>Assunto:</strong> ${validatedData.subject}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Mensagem:</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            Enviado através do formulário de contato - Bravo Cenografia
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Erro ao enviar email:', error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { success: false, error: 'Erro ao processar solicitação' },
      { status: 400 }
    )
  }
}
