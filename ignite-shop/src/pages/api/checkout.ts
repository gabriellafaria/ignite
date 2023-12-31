import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body;

  if (req.method != 'POST') {
    return res.status(405).json({ error: 'Price not found.' })

  }

  if (!priceId) {
    return res.status(400).json({ error: 'Price not found.' })
  }

  const sucessUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`

  const checkoutSessions = await stripe.checkout.sessions.create({
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ]
  })  

  return res.status(201).json({
    checkoutUrl: checkoutSessions.url,
  })
}
