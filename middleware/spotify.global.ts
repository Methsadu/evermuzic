export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    return;
  }

  const spotify = useSpotify();

  if (spotify.check()) {
    return;
  }

  await spotify.getAnAccessToken();
  return;
});