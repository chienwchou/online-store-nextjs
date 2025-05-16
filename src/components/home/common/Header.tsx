import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <section className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Help Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Clovers.</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="mb-1">
                Visit our <Link href="/support" className="underline">Customer Support</Link>
              </p>
              <p className="mb-4">for assistance or call us at</p>
              <p className="text-xl font-bold">123-456-7890</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook size={24} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram size={24} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter size={24} />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube size={24} />
              </Link>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/deals">Deals</Link></li>
              <li><Link href="/food">Food</Link></li>
              <li><Link href="/beverages">Beverages</Link></li>
              <li><Link href="/household">Household</Link></li>
              <li><Link href="/personal-care">Personal Care</Link></li>
              <li><Link href="/my-orders">My Orders</Link></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/vegetables">Vegetables</Link></li>
              <li><Link href="/bakery">Bakery</Link></li>
              <li><Link href="/wine">Wine</Link></li>
              <li><Link href="/dairy-eggs">Dairy & Eggs</Link></li>
              <li><Link href="/meat-poultry">Meat & Poultry</Link></li>
              <li><Link href="/soft-drinks">Soft Drinks</Link></li>
              <li><Link href="/cleaning-supplies">Cleaning Supplies</Link></li>
              <li><Link href="/cereal-snacks">Cereal & Snacks</Link></li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Info</h3>
              <ul className="space-y-2">
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/support">Customer Support</Link></li>
                <li><Link href="/locations">Locations</Link></li>
              </ul>
            </div>

            {/* My Choice Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">My Choice</h3>
              <ul className="space-y-2">
                <li><Link href="/favorites">Favorites</Link></li>
                <li><Link href="/my-orders">My Orders</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="border-t border-red-500 my-8"></div>

        {/* Footer Bottom */}
        <div className="text-center">
          {/* Policy Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <Link href="/shipping-returns" className="underline">Shipping & Returns</Link>
            <Link href="/terms" className="underline">Terms & Conditions</Link>
            <Link href="/payment" className="underline">Payment Methods</Link>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-xl mb-6">We accept the following payment methods</h3>
            <div className="flex justify-center flex-wrap gap-4">
              {/* Payment Icons */}
              <div className="bg-white p-2 rounded">
                <Image src="/mastercard.png" alt="Mastercard" width={40} height={24} className="h-6 w-auto" />
              </div>
              <div className="bg-white p-2 rounded">
                <Image src="/amex.png" alt="American Express" width={40} height={24} className="h-6 w-auto" />
              </div>
              <div className="bg-white p-2 rounded">
                <Image src="/unionpay.png" alt="UnionPay" width={40} height={24} className="h-6 w-auto" />
              </div>
              <div className="bg-white p-2 rounded">
                <Image src="/jcb.png" alt="JCB" width={40} height={24} className="h-6 w-auto" />
              </div>
              <div className="bg-white p-2 rounded">
                <Image src="/discover.png" alt="Discover" width={40} height={24} className="h-6 w-auto" />
              </div>
              <div className="bg-white p-2 rounded">
                <Image src="/visa.png" alt="Visa" width={40} height={24} className="h-6 w-auto" />
              </div>
              <div className="bg-white p-2 rounded">
                <Image src="/paypal.png" alt="PayPal" width={40} height={24} className="h-6 w-auto" />
              </div>
              <div className="bg-white p-2 rounded">
                <Image src="/diners.png" alt="Diners Club" width={40} height={24} className="h-6 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;