import JSZip from 'jszip'
import { saveAs } from 'file-saver'

export  const handleDownload = async (downloadedImages) => {
             const zip = new JSZip()
    
              const imagePromises = downloadedImages.map(async (url, index) => {
              const response = await fetch(url);
              const blob = await response.blob();
              zip.file(`image${index + 1}.png`, blob);
            });
    
            await Promise.all(imagePromises);
            const zipBlob = await zip.generateAsync({ type: 'blob' });
            saveAs(zipBlob, 'images.zip');
        }