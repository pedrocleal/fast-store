const products = [
  {
    id: Math.random(),
    title: 'Tênis de Caminhada Leve Confortável',
    price: 'R$ 179,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 'R$ 139,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis de Caminhada Leve Confortável',
    price: 'R$ 179,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 'R$ 139,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis de Caminhada Leve Confortável',
    price: 'R$ 179,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 'R$ 139,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis de Caminhada Leve Confortável',
    price: 'R$ 179,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 'R$ 139,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis de Caminhada Leve Confortável',
    price: 'R$ 179,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
  },
  {
    id: Math.random(),
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 'R$ 139,90',
    image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg'
  }
]

export async function GET(request: Request) {
  return new Response(JSON.stringify(products))
}