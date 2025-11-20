import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronRight, Smartphone, Youtube, MessageCircle, Download, CheckCircle, Leaf, TrendingUp, Shield, Users, Award, MapPin, Building2, Calendar, Sparkles } from "lucide-react";
import { LanguageSelector } from "./components/LanguageSelector";
import { QRCodeDisplay } from "./components/QRCodeDisplay";
import { SuccessModal } from "./components/SuccessModal";
import { ProductSlide } from "./components/ProductSlide";
import { translations, Language } from "./components/translations";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

const APP_LINKS = {
  playStore: "https://play.google.com/store/apps/details?id=com.chimertech.iherd",
  driveVideo: "https://drive.google.com/file/d/1LUwCcwqVCO_rB4kP8AVlHSOnuVkhHism/view?usp=sharing",
  youtube: "https://youtu.be/R0Stp91yiAs",
  whatsapp: "http://wa.link/igupbd",
  website: "https://www.chimertech.com",
};

export default function App() {
  const [language, setLanguage] = useState<"en" | "ta" | "hi" | "te">("ta");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    village: "",
    district: "",
    requirement: "",
  });

  const t = translations[language];
  

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  

  try {
    await addDoc(collection(db, "farmers"), formData); // "farmers" is the collection
    setShowSuccessModal(true);

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      village: "",
      district: "",
      requirement: "",
    });

    console.log("Farmer details added successfully!");
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};
    // Define the slides for the app
  const slides = [
    // Slide 1: Welcome Hero
    <div key="welcome" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className= "bg-white rounded-full p-8 shadow-xl flex items-center justify-center">
              <img
                src="https://static.wixstatic.com/media/a001c4_6ff8506afb894a5e9aac5762e5b49b3c~mv2.png/v1/crop/x_4,y_174,w_988,h_422/fill/w_446,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PRIVATE%20LIMITED%20(Logo).png"
                alt="Company Logo"
                className="w-24 h-24 object-contain"
             />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4 text-green-700"
          >
            {t.welcome}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-700 max-w-2xl mx-auto mb-8"
          >
            {t.tagline}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676454502649-710fccbdb421?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBmYXJtZXIlMjBjb3clMjBkYWlyeXxlbnwxfHx8fDE3NjM0ODU4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Indian farmer with dairy cow"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-4 flex-wrap"
            >
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                <Award className="w-4 h-4 mr-2" />
                Chennai, Tamil Nadu
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                <Calendar className="w-4 h-4 mr-2" />
                Founded 2019
              </Badge>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                <Users className="w-4 h-4 mr-2" />
                11-50 Employees
              </Badge>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={() => setCurrentSlide(1)}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>,

    // Slide 2: About Us
    <div key="about" className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-blue-700">{t.aboutTitle}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1605014627286-a99b8d6c2b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW1pbCUyME5hZHUlMjBkYWlyeSUyMGZhcm1pbmd8ZW58MXx8fHwxNzYzNDg1ODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dairy farming in Tamil Nadu"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <p className="text-gray-700 mb-6 leading-relaxed">{t.aboutDescription}</p>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3"
              >
                <Building2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{t.companyInfo.industry}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-3"
              >
                <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{t.companyInfo.size}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-start gap-3"
              >
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{t.companyInfo.headquarters}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex items-start gap-3"
              >
                <Calendar className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{t.companyInfo.founded}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="flex items-start gap-3"
              >
                <Sparkles className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-600">{t.companyInfo.specialties}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="h-full border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle>{t.visionTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.visionText}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="h-full border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{t.missionTitle}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{t.missionText}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>,

    // Slide 3: Products & iHerd App
    <div key="products" className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-green-700">{t.productsTitle}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src="https://static.wixstatic.com/media/bfd149_dda8d43122274372ac5472b8817461a2~mv2.png/v1/fill/w_940,h_786,al_c,q_90,enc_avif,quality_auto/bfd149_dda8d43122274372ac5472b8817461a2~mv2.png"
              alt="Mobile farming app"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent flex items-end">
              <div className="p-8 text-white">
                <Smartphone className="w-12 h-12 mb-4" />
                <h3 className="mb-2">{t.iherdTitle}</h3>
                <p className="opacity-90">{t.iherdDescription}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-green-700">{t.iherdFeatures.title}</h3>
            
            <div className="space-y-4">
              {[
                t.iherdFeatures.feature1,
                t.iherdFeatures.feature2,
                t.iherdFeatures.feature3,
                t.iherdFeatures.feature4,
                t.iherdFeatures.feature5,
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-center mb-8 text-blue-700">{t.howToUse}</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", text: t.step1, icon: Download },
              { step: "2", text: t.step2, icon: Users },
              { step: "3", text: t.step3, icon: Smartphone },
              { step: "4", text: t.step4, icon: TrendingUp },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-green-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>,

    // Slide 4: Download Links & QR Codes
    <div key="download" className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-blue-700">Access iHerd App</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Download our app, watch tutorials, and join our farming community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Play Store */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="text-center hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>{t.downloadApp}</CardTitle>
                <CardDescription>{t.scanQR}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-inner">
                  <QRCodeDisplay url={APP_LINKS.playStore} size={180} />
                </div>
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <a href={APP_LINKS.playStore} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download App
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* YouTube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="text-center hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Youtube className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle>{t.watchDemo}</CardTitle>
                <CardDescription>{t.scanQR}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-inner">
                  <QRCodeDisplay url={APP_LINKS.youtube} size={180} />
                </div>
                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <a href={APP_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-4 h-4 mr-2" />
                    Watch Video
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="text-center hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>{t.joinWhatsApp}</CardTitle>
                <CardDescription>{t.scanQR}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-inner">
                  <QRCodeDisplay url={APP_LINKS.whatsapp} size={180} />
                </div>
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  <a href={APP_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Community
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Demo Video Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <h3 className="mb-4">"iHerd செயலியை எப்படிப் பயன்படுத்துவது என்பதை முழுமையாக காணுங்கள்"</h3>
          <p className="text-gray-600 mb-6"></p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
          >
            
            <a href={APP_LINKS.driveVideo} target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 mr-2" />
              Watch Full Demo
            </a>
          </Button>
        </motion.div>
      </div>
    </div>,

    // Product Slides - California Mastitis Test
    <ProductSlide
      key="cmt"
      title={t.products.cmt.title}
      category={t.products.mastitisManagement}
      categoryBadge={t.products.prevention}
      description={t.products.cmt.description}
      features={[
        t.products.cmt.feature1,
        t.products.cmt.feature2,
        t.products.cmt.feature3,
        t.products.cmt.feature4,
        t.products.cmt.feature5,
      ]}
      imageUrl="https://static.wixstatic.com/media/a001c4_68eab0b256ab424d9909195736e1157e~mv2.png/v1/fill/w_780,h_1184,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design.png"
      buyNowText={t.buyNow}
      buyNowLink="https://www.chimertech.com/product-page/california-mastitis-test-kit-with-paddle"
      
    />,

    // Product Slide - NutraKine
    <ProductSlide
      key="nutrakine"
      title={t.products.nutrakine.title}
      category={t.products.nutrientSupplements}
      categoryBadge={t.products.treatment}
      description={t.products.nutrakine.description}
      features={[
        t.products.nutrakine.feature1,
        t.products.nutrakine.feature2,
        t.products.nutrakine.feature3,
        t.products.nutrakine.feature4,
        t.products.nutrakine.feature5,
      ]}
      imageUrl="https://static.wixstatic.com/media/bfd149_8521084c3ecf4359b72495d63a1868da~mv2.jpg/v1/crop/x_203,y_2,w_957,h_1339/fill/w_786,h_1106,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/external-file_edited.jpg"
      buyNowText={t.buyNow}
      buyNowLink="https://www.chimertech.com/product-page/nutrakine-fertility-booster-500grams"
    />,

    // Product Slide - 6.5 HP Engine
    <ProductSlide
      key="engine"
      title={t.products.engine.title}
      subtitle={t.products.engine.subtitle}
      category={t.products.dairyEquipment}
      categoryBadge={t.products.dairyEquipment}
      description={t.products.engine.description}
      features={[
        t.products.engine.feature1,
        t.products.engine.feature2,
        t.products.engine.feature3,
        t.products.engine.feature4,
        t.products.engine.feature5,
      ]}
      imageUrl="https://static.wixstatic.com/media/a001c4_b36972100432454bb57e2d25e9d0ba8e~mv2.png/v1/crop/x_8,y_0,w_530,h_497/fill/w_587,h_596,al_c,lg_1,q_85,enc_avif,quality_auto/Annotation%202025-02-05%20185815.png"
      buyNowText={t.buyNow}
      buyNowLink="https://www.chimertech.com/product-page/6-5-hp-petrol-engine"
    />,

    // Product Slide - Salmonella Test
    <ProductSlide
      key="salmonella"
      title={t.products.salmonella.title}
      category={t.products.veterinaryTests}
      categoryBadge={t.products.detection}
      description={t.products.salmonella.description}
      features={[
        t.products.salmonella.feature1,
        t.products.salmonella.feature2,
        t.products.salmonella.feature3,
        t.products.salmonella.feature4,
        t.products.salmonella.feature5,
      ]}
      imageUrl="https://static.wixstatic.com/media/bfd149_3825ee6c2bfe4e4dbd8a82e0eee43239~mv2.jpg/v1/fill/w_780,h_780,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/salmon_edited.jpg"
      buyNowText={t.buyNow}
      buyNowLink="https://www.chimertech.com/product-page/salmonella-antibody-rapid-test-kit"
    />,

    // Product Slide - PregKine
    <ProductSlide
      key="pregkine"
      title={t.products.pregkine.title}
      category={t.products.breedingSolutions}
      categoryBadge={t.products.detection}
      description={t.products.pregkine.description}
      features={[
        t.products.pregkine.feature1,
        t.products.pregkine.feature2,
        t.products.pregkine.feature3,
        t.products.pregkine.feature4,
        t.products.pregkine.feature5,
      ]}
      imageUrl="https://static.wixstatic.com/media/a001c4_186d39723fae4cecbcb4ee3f31fe574b~mv2.avif/v1/fill/w_665,h_665,al_c,lg_1,q_85,enc_avif,quality_auto/y.avif"
      buyNowText={t.buyNow}
      buyNowLink="https://www.chimertech.com/product-page/pregkine-bovine-pregnancy-rapid-test-kit-pack-of-10"
    />,

    // Product Slide - Iogiene
    <ProductSlide
      key="iogiene"
      title={t.products.iogiene.title}
      category={t.products.mastitisManagement}
      categoryBadge={t.products.prevention}
      description={t.products.iogiene.description}
      features={[
        t.products.iogiene.feature1,
        t.products.iogiene.feature2,
        t.products.iogiene.feature3,
        t.products.iogiene.feature4,
        t.products.iogiene.feature5,
      ]}
      imageUrl="https://static.wixstatic.com/media/a001c4_6af24cc7d48343dab803578714ae6000~mv2.png/v1/crop/x_2950,y_0,w_2791,h_3375/fill/w_748,h_904,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png"
      buyNowText={t.buyNow}
      buyNowLink="https://www.chimertech.com/product-page/iogiene"
    />,

    // Product Slide - Moo-Foam
    <ProductSlide
      key="moofoam"
      title={t.products.moofoam.title}
      subtitle={t.products.moofoam.subtitle}
      category={t.products.mastitisManagement}
      categoryBadge={t.products.prevention}
      description={t.products.moofoam.description}
      features={[
        t.products.moofoam.feature1,
        t.products.moofoam.feature2,
        t.products.moofoam.feature3,
        t.products.moofoam.feature4,
        t.products.moofoam.feature5,
      ]}
      imageUrl="https://static.wixstatic.com/media/a001c4_20b56085396745b68a79b57c3fa89174~mv2.png/v1/crop/x_1604,y_0,w_2793,h_3375/fill/w_748,h_904,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5.png"
      buyNowText={t.buyNow}
      buyNowLink="https://www.chimertech.com/product-page/moo-foam"
    />,

    // Product Slide - QuadMastest
    <ProductSlide
      key="quadmastest"
      title={t.products.quadmastest.title}
      subtitle={t.products.quadmastest.subtitle}
      category={t.products.mastitisManagement}
      categoryBadge={t.products.detection}
      description={t.products.quadmastest.description}
      features={[
        t.products.quadmastest.feature1,
        t.products.quadmastest.feature2,
        t.products.quadmastest.feature3,
        t.products.quadmastest.feature4,
        t.products.quadmastest.feature5,
        t.products.quadmastest.feature6,
        t.products.quadmastest.feature7,
        t.products.quadmastest.feature8,
      ]}
      imageUrl="https://static.wixstatic.com/media/a001c4_c8129ca228a2498c8d81b998daecd31b~mv2.png/v1/fill/w_694,h_904,al_c,q_90,enc_avif,quality_auto/Quadmastest%20(1)_edited_edited.png"
      buyNowText={t.buyNow}
      buyNowLink="https://www.chimertech.com/product-page/quadmastest"
    />,

    // Product Slide - Mastoveda
    <ProductSlide
      key="mastoveda"
      title={t.products.mastoveda.title}
      subtitle={t.products.mastoveda.subtitle}
      category={t.products.mastitisManagement}
      categoryBadge={t.products.treatment}
      description={t.products.mastoveda.description}
      features={[
        t.products.mastoveda.feature1,
        t.products.mastoveda.feature2,
        t.products.mastoveda.feature3,
        t.products.mastoveda.feature4,
        t.products.mastoveda.feature5,
        t.products.mastoveda.feature6,
        t.products.mastoveda.feature7,
      ]}
      imageUrl="https://static.wixstatic.com/media/a001c4_4389b7b639c2425cbd7470ac1e7c4c16~mv2.png/v1/crop/x_1953,y_576,w_2008,h_2753/fill/w_516,h_708,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/products%20images%20(4).png"
      buyNowText={t.buyNow} 
      buyNowLink="https://www.chimertech.com/product-page/mastoveda"

    />,

    // Slide 5: Registration Form
    <div key="form" className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-green-700">{t.formTitle}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your details and requirements. Our team will reach out to help you get started with smart dairy farming.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]"
          >
            <ImageWithFallback
              src="https://static.wixstatic.com/media/bfd149_79b389bbd77749ad81a102de448b4e23~mv2.png/v1/fill/w_874,h_874,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/bfd149_79b389bbd77749ad81a102de448b4e23~mv2.png"
              alt="Milk production"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end">
              <div className="p-8 text-white bg-gradient-to-t from-black/70 via-black/40 to-transparent w-full">
                <h3 className="mb-4">Join the Revolution</h3>
                <p className="mb-4 opacity-90">
                  Be part of India's leading dairy farming technology movement
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    <Users className="w-4 h-4 mr-2" />
                    10,000+ Farmers
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    30% More Production
                  </Badge>
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                    <Leaf className="w-4 h-4 mr-2" />
                    100% Sustainable
                  </Badge>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="shadow-2xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      {t.farmerName}
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t.enterName}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700">
                      {t.phoneNumber}
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t.enterPhone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      {t.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.enterEmail}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="village" className="block mb-2 text-gray-700">
                        {t.village}
                      </label>
                      <Input
                        id="village"
                        type="text"
                        placeholder={t.enterVillage}
                        value={formData.village}
                        onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                        required
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="district" className="block mb-2 text-gray-700">
                        {t.district}
                      </label>
                      <Input
                        id="district"
                        type="text"
                        placeholder={t.enterDistrict}
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        required
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block mb-2 text-gray-700">
                      {t.requirement}
                    </label>
                    <Textarea
                      id="requirement"
                      placeholder={t.enterRequirement}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      required
                      rows={4}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    size="lg"
                  >
                    {t.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 inline-block">
            <p className="text-gray-600 mb-2">Visit our website</p>
            <a
              href={APP_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              {APP_LINKS.website}
            </a>
          </div>
        </motion.div>
      </div>
    </div>,
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">

    {/* Fixed Language Selector */}
    <div className="fixed top-4 right-4 z-50">
      <LanguageSelector
        currentLanguage={language}
        onLanguageChange={(lang) =>
          setLanguage(lang as "en" | "ta" | "hi" | "te")
        }
     />
    </div>

      <div className="w-full h-full">

      {/* 🔥 SLIDES RENDERING */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

    </div>
      {/* Slide Navigation */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 space-y-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`block w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-green-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4">
        <Button
          onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          variant="outline"
          className="bg-white/90 backdrop-blur-sm"
        >
          {t.previous}
        </Button>
        <Button
          onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
          disabled={currentSlide === slides.length - 1}
          className="bg-green-600 hover:bg-green-700"
        >
          {t.next}
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title={t.successTitle}
        message={t.successMessage}
        closeText={t.close}
      />
    </div>
    
  );
}