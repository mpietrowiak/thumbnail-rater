"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { UploadFileResponse } from "@xixixao/uploadstuff";
import { UploadButton } from "@xixixao/uploadstuff/react";
import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import Image from "next/image";
import UploadThumbnailPreview from "../upload-thumbnail-preview";

export default function CreatePage() {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  //   const saveStorageId = useMutation(api.files.saveStorageId);
  const [imageA, setImageA] = useState("");
  const [imageB, setImageB] = useState("");

  //   const saveAfterUpload = async (uploaded: UploadFileResponse[]) => {
  //     await saveStorageId({ storageId: (uploaded[0].response as any).storageId });
  //   };

  return (
    <div className="my-16">
      <h1 className="text-4xl font-bold mb-8">Create a Thumbnail Test</h1>

      <p className="text-lg max-w-md mb-8">
        Create your test so that other people can vote on their favorite
        thumbnail and help you redesign or pickt he best options.
      </p>

      <form>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold">Test Image A</h2>

            <UploadButton
              uploadUrl={generateUploadUrl}
              fileTypes={["image/*"]}
              onUploadComplete={async (uploaded: UploadFileResponse[]) => {
                console.log("uploaded", uploaded);
                setImageA((uploaded[0].response as any).storageId);
              }}
              onUploadError={(error: unknown) => {
                // Do something with the error.
                alert(`ERROR! ${error}`);
              }}
            />

            {imageA && <UploadThumbnailPreview storageId={imageA} />}
          </div>
          <div>
            <h2 className="text-2xl font-bold">Test Image B</h2>

            <UploadButton
              uploadUrl={generateUploadUrl}
              fileTypes={["image/*"]}
              onUploadComplete={async (uploaded: UploadFileResponse[]) => {
                setImageB((uploaded[0].response as any).storageId);
              }}
              onUploadError={(error: unknown) => {
                // Do something with the error.
                alert(`ERROR! ${error}`);
              }}
            />

            {imageB && <UploadThumbnailPreview storageId={imageB} />}
          </div>
          <Button>Create Thumbnail test</Button>
        </div>
      </form>
    </div>
  );
}
