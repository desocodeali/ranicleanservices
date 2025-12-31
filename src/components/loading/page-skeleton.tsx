"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

/**
 * Page Loading Skeleton
 * 
 * Comprehensive loading skeleton for page content.
 * Improves UX by showing content structure while loading.
 */

export function PageSkeleton() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Skeleton className="h-12 w-3/4 md:h-16 md:w-2/3" />
            <Skeleton className="h-6 w-full max-w-2xl md:h-8" />
            <Skeleton className="h-6 w-5/6 max-w-2xl md:h-8" />
            <div className="flex gap-4 mt-8">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <Skeleton className="h-10 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>

          {/* Cards Grid Skeleton */}
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content Skeleton */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Compact Page Skeleton
 * 
 * Lighter version for smaller pages.
 */
export function CompactPageSkeleton() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6">
        {/* Header Skeleton */}
        <div className="mb-12 text-center">
          <Skeleton className="h-10 w-2/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
        </div>

        {/* Content Skeleton */}
        <div className="max-w-3xl mx-auto space-y-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-64 w-full rounded-lg" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}

/**
 * Form Skeleton
 * 
 * Loading skeleton for form pages.
 */
export function FormSkeleton() {
  return (
    <div className="w-full min-h-screen py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-1/2 mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
              <Skeleton className="h-12 w-full mt-6" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

