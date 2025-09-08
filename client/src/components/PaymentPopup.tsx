import { useState, useEffect } from "react";
import { X, CreditCard, AlertTriangle, DollarSign, Calendar, User, FileText } from "lucide-react";

export default function PaymentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [paymentReceived, setPaymentReceived] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  useEffect(() => {
    // Check if payment has been received (you can modify this logic)
    const checkPaymentStatus = () => {
      const paymentStatus = localStorage.getItem('paymentReceived');
      if (paymentStatus === 'true') {
        setPaymentReceived(true);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Show popup immediately
    setIsVisible(true);
    checkPaymentStatus();

    // Check payment status every 30 seconds
    const interval = setInterval(checkPaymentStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const handlePaymentComplete = () => {
    // This would typically be called when payment is verified
    localStorage.setItem('paymentReceived', 'true');
    setPaymentReceived(true);
    setIsVisible(false);
  };

  const handleClose = () => {
    // Prevent closing - popup should only close when payment is received
    return;
  };

  if (!isVisible || paymentReceived) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-500">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-500/50 rounded-3xl p-8 w-full max-w-2xl mx-4 animate-in zoom-in-95 duration-700 shadow-2xl shadow-red-500/25">
        {/* Header with warning */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-600/20 rounded-full border border-red-500/30">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">PAYMENT REQUIRED</h1>
              <p className="text-red-400 text-sm">Website access suspended</p>
            </div>
          </div>
          
          {/* Disabled close button */}
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-gray-800/50 text-gray-500 cursor-not-allowed opacity-50"
            disabled
            title="Payment required to close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Invoice Details */}
        <div className="bg-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-yellow-400" />
            <h2 className="text-xl font-bold text-white">Outstanding Invoice</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Client:</span>
                <span className="text-white font-semibold">[Client Name]</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Due Date:</span>
                <span className="text-red-400 font-semibold">OVERDUE</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Invoice #:</span>
                <span className="text-white font-mono">INV-2024-001</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Amount Due:</span>
                <span className="text-yellow-400 font-bold text-xl">Rp 1,500,000</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">Status:</span>
                <span className="text-red-400 font-semibold">UNPAID</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl p-6 mb-6 border border-red-500/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-yellow-400" />
            Payment Required
          </h3>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">Rp 1,500,000</div>
            <p className="text-gray-300">Outstanding payment for website services</p>
          </div>
        </div>

        {/* Contact for Payment */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-4">Contact for Payment</h3>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center">
            <p className="text-gray-300 mb-2">Contact us to arrange payment:</p>
            <p className="text-yellow-400 font-semibold">WhatsApp: 081234567890</p>
            <p className="text-yellow-400 font-semibold">Email: payment@yourcompany.com</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <button
            onClick={handlePaymentComplete}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold text-white hover:scale-105 transition-transform border-2 border-green-400/20"
          >
            Mark as Paid
          </button>
        </div>

        {/* Warning Message */}
        <div className="mt-6 p-4 bg-red-600/10 border border-red-500/30 rounded-xl">
          <div className="flex items-center gap-2 text-red-400 font-semibold mb-2">
            <AlertTriangle className="w-5 h-5" />
            Important Notice
          </div>
          <p className="text-gray-300 text-sm">
            This website will remain inaccessible until payment is received. 
            All content and functionality is suspended until the outstanding balance is cleared.
            Contact us immediately to resolve this matter.
          </p>
        </div>

        {/* Floating warning particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-60"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + i * 12}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}