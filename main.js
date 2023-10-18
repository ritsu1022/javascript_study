try {
  throw new Error("Original Error");
} catch (e) {
  console.log(e.name + "." + e.message);
}