import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Upload, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const UploadZone = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      processFile(acceptedFiles[0]);
    }
  }, []);

  const processFile = (file) => {
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      toast({
        title: "Processamento concluído!",
        description: "Seu recibo foi categorizado com sucesso.",
        variant: "default",
      });
    }, 2000);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    disabled: isProcessing || isComplete
  });

  const resetUpload = () => {
    setFile(null);
    setIsComplete(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!isComplete ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`upload-zone rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all ${
            isDragActive ? "bg-primary/10" : "bg-transparent"
          }`}
          style={{ minHeight: "300px" }}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          
          {isProcessing ? (
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Processando...</h3>
              <p className="text-muted-foreground">
                Estamos analisando seu documento com nossa IA.
              </p>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Arraste e solte seu recibo ou boleto aqui
              </h3>
              <p className="text-muted-foreground text-center mb-4">
                Suportamos arquivos JPG, PNG e PDF até 10MB
              </p>
              <Button className="gradient-bg border-0">
                Selecionar arquivo
              </Button>
              {file && (
                <p className="mt-4 text-sm">
                  Arquivo selecionado: {file.name}
                </p>
              )}
            </>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl p-8 shadow-lg border"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">
            Documento processado com sucesso!
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Tipo:</span>
              <span className="font-medium">Recibo</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Valor:</span>
              <span className="font-medium">R$ 157,90</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Data:</span>
              <span className="font-medium">31/05/2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Categoria:</span>
              <span className="font-medium text-purple-600">Alimentação</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="outline"
              className="mr-2"
              onClick={resetUpload}
            >
              Escanear outro
            </Button>
            <Button className="gradient-bg border-0">
              Ver relatório completo
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UploadZone;