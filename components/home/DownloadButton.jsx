"use client"

import { FiDownload } from "react-icons/fi"
import { Button } from "../ui/button"
import { cvPath } from "../data/Data"

const DownloadButton = () => {

    const handleDownloadCV = () => {
        const anchor = document.createElement('a');
        anchor.href = cvPath;
        anchor.download = 'cv.pdf';
        anchor.click();
    }

    return (
        <Button variant="outline" size="lg" onClick={handleDownloadCV} className="uppercase flex items-center gap-2">
            <span>Download CV</span>
            <FiDownload className="text-xl" />
        </Button>
    )
}

export default DownloadButton
