'use client'
import React from 'react';

const ErrorPage = ({ ErrorType }: { ErrorType: 'NotFound' | 'isDraft' }) => {
  if (ErrorType === 'isDraft' || ErrorType === 'NotFound') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-Primary/5">
        <div className="text-Text text-lg">
          {ErrorType === 'NotFound' ? 
            'This page does not exist.' :
            'This post is still a draft and not yet published.'
        }
            </div>
          <button
            onClick={() => window.history.back()}
            className="mt-4 bg-Secondary px-4 py-2  text-Text rounded hover:bg-white/10 cursor-pointer transition"
          >
            Go Back
          </button>
      </div>
    );
  }
  return null;
};

export default ErrorPage;
