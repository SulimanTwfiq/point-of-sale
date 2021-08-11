export function formatPrice(price) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)
}

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getImageFromUnsplashAPI({ imagesUnsplashCollectionId, itemId, width, height }) {
  return `https://source.unsplash.com/collection/${imagesUnsplashCollectionId}/${width}x${height}?id=${itemId}`
}
