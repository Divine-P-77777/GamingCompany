import React from 'react'
import { Star } from 'lucide-react'
import { CUSTOMER_REVIEWS } from '../../lib/constants'
import { Card } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import { useSelector } from 'react-redux'

const ReviewsSection = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  return (
    <section
      id="testimonials"
      className={`py-20 ${
        isDarkMode ? 'bg-background/30' : 'bg-white/80'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gradient-text">Player Reviews</h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-cyan-100/80' : 'text-gray-700'
            }`}
          >
            See what our community says about their GameVault experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CUSTOMER_REVIEWS.map((review) => (
            <div key={review.name} className="animate-slide-in-up">
              <Card
                className={`p-8 h-full border ${
                  isDarkMode
                    ? 'dark:border-border/50 bg-background'
                    : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center mb-6">
                  {/* Avatar circle with gradient background */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gaming-primary to-gaming-secondary flex items-center justify-center mr-4">
                    {/* White text for initials, visible in both modes */}
                    <span className="text-white font-bold select-none">{review.avatar}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <h4
                        className={`text-lg font-semibold ${
                          isDarkMode ? 'text-cyan-100' : 'text-gray-900'
                        }`}
                      >
                        {review.name}
                      </h4>
                      
                    </div>
                    
                  </div>
                  
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gaming-warning text-gaming-warning"
                    />
                  ))}
                </div>
                
                <p
                  className={`italic ${
                    isDarkMode ? 'text-cyan-100/80' : 'text-gray-700'
                  }`}
                >
                  "{review.content}"
                </p>
                {review.verified && (
                        <Badge
                          variant="secondary"
                          className={`text-xs mt-4 ${
                            isDarkMode
                              ? 'bg-cyan-700 text-cyan-100'
                              : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          Verified Buyer
                        </Badge>
                      )}
              </Card>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
