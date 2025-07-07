import React from 'react'
import { useSelector } from 'react-redux'
import { Star, ShoppingCart } from 'lucide-react'
import { FEATURED_GAMES } from '../../lib/constants'
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import Button from '../../components/ui/Button'

const GamesSection = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode)

  return (
    <section
      id="games"
      className={`py-20 ${
        isDarkMode ? 'dark:bg-background/50' : 'bg-white/80'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gradient-text">Featured Games</h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-cyan-100/70' : 'text-black'
            }`}
          >
            Handpicked titles that are trending and loved by our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {FEATURED_GAMES.map((game) => (
            <div key={game.title} className="animate-slide-in-up">
              <Card
                className={`h-full dark:border-border/50 ${
                  isDarkMode
                    ? 'bg-background/50 text-cyan-100'
                    : 'bg-white/80 text-black'
                }`}
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {game.discount > 0 && (
                    <Badge className="absolute top-2 right-2 bg-gaming-accent text-white">
                      -{game.discount}%
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle
                    className={`${isDarkMode ? 'text-cyan-100' : 'text-black'} text-lg`}
                  >
                    {game.title}
                  </CardTitle>
                  <Badge variant="secondary" className="w-fit">
                    {game.genre}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(game.rating)
                              ? 'fill-gaming-warning text-gaming-warning'
                              : isDarkMode
                              ? 'text-cyan-100/50'
                              : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span
                      className={`ml-2 text-sm ${
                        isDarkMode ? 'text-cyan-100/70' : 'text-gray-500'
                      }`}
                    >
                      ({game.reviews})
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold gaming-primary">
                      {game.price}
                    </span>
                    {game.originalPrice !== game.price && (
                      <span
                        className={`text-sm line-through ${
                          isDarkMode ? 'text-cyan-100/50' : 'text-gray-500'
                        }`}
                      >
                        {game.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GamesSection
