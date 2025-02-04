import React from 'react'
import { Star } from 'lucide-react'

const Testimonial = ({ author, date, content, rating }) => (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
        ))}
      </div>
      <p className="text-gray-600 text-sm">{content}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-medium">{author}</span>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
    </div>
  );

export default Testimonial