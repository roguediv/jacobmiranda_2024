'use client'
import localFont from 'next/font/local';
import React, {forwardRef, useEffect, Ref, useRef } from 'react';

type props = {
  className?: string;
  loadText?: string;
  placeholder?: string;
  Trigger?: (content: string) => Promise<void>;
}

const SF_Unit_Pro = localFont({src: [
  {
    path: '../../public/fonts/FF Unit Pro Light.otf',
    weight: '300'
  },
  {
    path: '../../public/fonts/FF Unit Pro Regular.otf',
    weight: '400'
  },
  {
    path: '../../public/fonts/FF Unit Pro Bold.otf',
    weight: '600'
  },
  {
    path: '../../public/fonts/FF Unit Pro Black.otf',
    weight: '800'
  }
]})

const AutoTextarea = forwardRef<HTMLTextAreaElement, props>(({className = "", loadText = "", placeholder = "", Trigger = () => {}}, ref) => {
  if (!ref || !('current' in ref)) {
    ref = useRef<HTMLTextAreaElement | null>(null);
  }
  useEffect(() => {
    
    if (!ref || !('current' in ref)) return;
    // Function to auto-resize the textarea
    const autoTextarea = () => {
      if (!ref || !('current' in ref)) return;
      const textarea = ref.current;
      if (textarea) {
        textarea.style.height = 'auto'; // Reset the height to calculate the actual scroll height
        textarea.style.height = textarea.scrollHeight + 'px'; // Set the height to the calculated scroll height
      }
    };

    // Call the autoTextarea function on input (when the user types)
    const handleInput = () => {
      autoTextarea();
    };

    // Attach event listener
    const textarea = ref.current;
    if (textarea) {
      textarea.addEventListener('input', handleInput);
      autoTextarea(); // Resize initially if there is pre-filled content
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (textarea) {
        textarea.removeEventListener('input', handleInput);
      }
    };
  }, []);

  return (
    <textarea style={SF_Unit_Pro.style}
      ref={ref}
      rows={1}
      placeholder={placeholder}
      defaultValue={loadText}
      onBlur={async (event) => {Trigger(event.target.value)}}
    />
  );
}) 

export default AutoTextarea;