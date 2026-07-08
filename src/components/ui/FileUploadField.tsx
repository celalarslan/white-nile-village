'use client';

import { useState, useRef, useCallback } from 'react';
import { UploadSimple as Upload, FileText, X } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface FileUploadFieldProps {
  label: string;
  accept?: string;
  required?: boolean;
  onChange?: (file: File | null) => void;
  hint?: string;
}

export default function FileUploadField({
  label,
  accept,
  required = false,
  onChange,
  hint,
}: FileUploadFieldProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (selectedFile: File | null) => {
      setFile(selectedFile);
      onChange?.(selectedFile);
    },
    [onChange]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    handleFile(selected);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0] ?? null;
    if (droppedFile) handleFile(droppedFile);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const clearFile = () => {
    handleFile(null);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="w-full">
      {/* Label */}
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ms-1 text-red-500">*</span>}
      </label>

      {/* Upload Area */}
      {!file ? (
        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click();
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={cn(
            'flex cursor-pointer flex-col items-center justify-center gap-3',
            'rounded-xl border-2 border-dashed p-8',
            'transition-all duration-200',
            isDragging
              ? 'border-green-400 bg-green-50/50'
              : 'border-gray-200 bg-gray-50/50 hover:border-green-300 hover:bg-green-50/30'
          )}
        >
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-full',
              isDragging ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
            )}
          >
            <Upload className="h-5 w-5" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-600">
              Click to upload or drag and drop
            </p>
            {accept && (
              <p className="mt-1 text-xs text-gray-400">
                Accepted: {accept}
              </p>
            )}
          </div>
        </div>
      ) : (
        // Selected File Display
        <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50/50 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
            <FileText className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-800">{file.name}</p>
            <p className="text-xs text-gray-400">
              {(file.size / 1024).toFixed(1)} KB
            </p>
          </div>
          <button
            onClick={clearFile}
            className="shrink-0 rounded-md p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
            aria-label="Remove file"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Hidden Input */}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleInputChange}
        className="hidden"
        required={required}
      />

      {/* Hint */}
      {hint && (
        <p className="mt-2 text-xs text-gray-400">{hint}</p>
      )}
    </div>
  );
}
