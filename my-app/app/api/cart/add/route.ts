import { NextRequest, NextResponse } from 'next/server';

// ✅ SECURITY: Server-side validation of product data
const allProducts = [
  { id: 1, name: "Premium Cotton Hoodie", price: 89.99, sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Navy', 'Gray'] },
  // ... all products
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { productId, size, color, quantity } = body;

    // ✅ VALIDATION 1: Product exists
    const product = allProducts.find(p => p.id === productId);
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // ✅ VALIDATION 2: Size is valid
    if (!product.sizes.includes(size)) {
      return NextResponse.json(
        { error: 'Invalid size' },
        { status: 400 }
      );
    }

    // ✅ VALIDATION 3: Color is valid
    if (!product.colors.includes(color)) {
      return NextResponse.json(
        { error: 'Invalid color' },
        { status: 400 }
      );
    }

    // ✅ VALIDATION 4: Quantity is reasonable
    if (quantity < 1 || quantity > 100) {
      return NextResponse.json(
        { error: 'Invalid quantity' },
        { status: 400 }
      );
    }

    // ✅ SECURITY: Get price from server (not from client)
    const serverPrice = product.price;

    // Store in session/database
    // For now, we'll return success
    return NextResponse.json({
      success: true,
      message: 'Added to cart',
      cartItem: {
        productId,
        size,
        color,
        quantity,
        price: serverPrice, // ← Server price, not client price
      }
    });

  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
