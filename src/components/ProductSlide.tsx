import { motion } from "motion/react";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductSlideProps {
  title: string;
  subtitle?: string;
  category: string;
  categoryBadge: string;
  description: string;
  features: string[];
  imageUrl: string;
  buyNowText: string;
}

export function ProductSlide({
  title,
  subtitle,
  category,
  categoryBadge,
  description,
  features,
  imageUrl,
  buyNowText,
}: ProductSlideProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Badge className="mb-4 text-white bg-gradient-to-r from-green-600 to-blue-600">
            {category}
          </Badge>
          <h2 className="mb-2">{title}</h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]"
          >
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-600 text-white">
                {categoryBadge}
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {buyNowText}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
