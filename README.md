<p align="center">
  <img src="src/assets/logo.png" width="200" height="200" />
</p>

# Power Space - React project
Power Space jest platformą społecznościową dla trójboistów, przy pomocy której możemy aktualizować swoje wyniki siłowe. Wszyscy użytkownicy aplikacji są punktowani i stawiani obok siebie w rankingu. Dodatkowo możemy publikować posty wraz ze zdjęciami na wallu oraz dodawać innych użytkowników do listy znajomych. Stworzyłem ten projekt aby nauczyć się pracy przy użyciu reacta oraz innych bibliotek niezbędnych do tworzenia wydajnego, utrzymywalnego kodu o wysokiej jakości.

# [Live DEMO](https://power-space.vercel.app)

| Project preview           |
:-------------------------:
|<img src="src/assets/app-preview.gif" width="550" height="300" />|
<br>
<br>

## Tech stack
The application was developed by using these tools:
- React,
- Vite,
- TailwindCSS,
- Tanstack Query,
- React-Hook-Form,
- React Hot Toast,
- Vitest,
- Testing Library,
- Supabase
  <br>
  <br>
## Getting Started
Follow these steps to install power-space on your local environment.
<br>
<strong>Install the packages</strong>
```
npm install
```

<strong>Run the app using terminal</strong>
```
npm run dev
```
<br>
<br>

# Requirements
<br>

## General:
- Build a real world application from the scratch.
- Use best practices to provide good performance, scalability and readability of the project.
- Create responsive UI.

## Homepage:
- Print neccessary informations about the product such as pros of using the app, pricing, contact form etc.
- Allow user to smooth scroll through the page by using the navigation bar on the top of the screen.
- Create call to action buttons to navigate to log in or sign up page.<br>

## Authentication:

- Users of the app are people intrested in lifting weights, allow them to create an account or log in to an existing one.<br>
- Keep the session alive until user loggs out or clears cache memory.

## Wall:
- App needs a view on newest posts added by the community.
- Allow users to zoom in the images.
- Allow users to add their own posts with an option of uploading images.
- Users may want to edit their post or even delete it from the app.
- Display a descriptive icon if author of a posts is in a friends list of the currently logged in user.
- Instead of showing full content of a post, display only a piece of it with "show more" button at the end.<br>

## Dashboard:
- App needs a view on the currenly logged in user and his statistics such as lifting stats, age, height etc.
- Display an etiquette of an user with a color reffering to users score.
- Allow user to update his statistics and training parameters.<br>

## Ranking/Profiles:
- Create a table of users currently registered in the application.
- Allow users to filter through profiles by age. (juniors/seniors)
- Allow users to sort the table by score, total and weight.
- Create pagination or infinite loading to display only readable amount of profiles.
- Show adequate medal for top 3 lifters in each category.
- Display profile of each user of the app.<br>
 

 ## Friends:
- Users can add each other to friends list via button on the profile page.
- Display a list of profiles that user added to his friends list.
- In each of them user has to find a button to navigate to that profiles details.<br>
  
## Account:
- Allow users to change account data such as username and password.<br>
  
## Settings:
- Some users may want to use pounds instead of kilograms, allow them to change the unit.
- Create an option to hide a profile in a ranking leaderboard.<br>

# Implementation
<br>

## Back-end
As a person currently focused on front-end development, I decided to build my own back-end with Supabase. Using a pre-existing (in my opinion, overused) weather API or crypto API was out of the question, as from the beginning, I wanted to create a product tailored to my needs. Supabase offers intuitive GUI to create a database and provides access to an extensive API. Learning back-end development to bring the project to completion would certainly have taken at least a few months, and that was not an option for me in this case.

## Problems

### Authentication:
- Uwierzytelnianie towarzyszy nam na codzień i stanowi podstawe obecnych usług i serwisów internetowych. Ja również chciałem zaimplementować taką funkcjonalność i pomogło mi w tym API supabase, które zapisuje aktywną sesję w <code>localstorage</code> (o ile użytkownik podał prawidłowe dane do logowania) tymsamym udostępniając dostęp do aplikacji zapiętej w protected route. <br>
```
//if theres no imageFile selected insert null into image column;
  if (!newPost.image) {
    let { data, error } = await supabase
      .from("posts")
      .insert([{ ...newPost, image: null }])
      .select();

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return data;
  }
```

### Adding friends:
- Tutaj długo nie byłem pewien czy mój pomysł zadziała, ponieważ powstał on zanim napisałem pierwsze linie kodu w tym projekcje, a ja nie wiedziałem czy supabase pozwoli mi na użycie tablicy w jednej z column. Koncepcja była następująca: jako, iż odwiedzając jakiś konkretny profil na naszej platformie otrzymujemy <code>id</code> danego użytkownika w adresie URL to możemy go pobrać i sprawdzić czy w tablicy w columnie <code>friends</code> w profilu obecnie zalogowanego użytkownika znajduje się wartość równa temu <code>id</code> z adresu URL. Jeżeli znajduje się ono w naszej tablicy to po wciśnięciu odpowiedniego przycisku (który wtedy ma napis "Remove friend") filtrujemy tę tablice. W przciwnym wypadku przycisk ma nazwę "Add Friend" a my dekonstuujemy tablice pobraną z API, dodajemy do niej kolejny element którego wartość to <code>id</code> z adresu URL a następnie zapisujemy tę tablicę w naszej bazie danych. Tak oto dodajemy nowy profil do naszej listy znajomych.<br>
  
```
function AddFriendButton({ friends, currentProfileId, id }) {
  const { updateProfile, isUpdating } = useUpdateProfile();

  const isFriend = friends.includes(id);

  const handleAddFriend = () => {
    const updatedFriends = [...friends, id];
    updateProfile({ stats: { friends: updatedFriends }, id: currentProfileId });
  };

  const handleRemoveFriend = () => {
    const updatedFriends = friends.filter((friendId) => friendId !== id);
    updateProfile({ stats: { friends: updatedFriends }, id: currentProfileId });
  };

  const handleClick = () => {
    if (isFriend) {
      handleRemoveFriend();
    } else {
      handleAddFriend();
    }
  };

  return (
    <Button onClick={handleClick} disabled={isUpdating}>
      {isUpdating ? <SpinnerMini /> : isFriend ? "Remove friend" : "Add friend"}
    </Button>
  );
}
```

### Adding posts:
- Aby utworzyć post wystarczy wypełnić text area oraz opcjonalnie dodać plik ze zdjęciem. Następnie submitujemy formularz i post zostaje dodany do naszej bazy danych. Koncepcja wydaję się być prosta jednak w praktyce przyspożyła mi dużo trudność. Mianowicie nie wiedziałem gdzie ta "opcjonalność" powinna się znajdować. Finalnie postawiłem na duży if statement, który decydował o tym, że asynchroniczna funkcja <code>insertPost()</code> nie dodawała obrazu do storage bucketa wraz ze specjalnie wygenerowaną nazwą. Kiedy już mogliśmy otrzymać opcjonalny <code>null</code> to komponent, który odpowiada za wyświetlanie postów na ekranie renderował warunkowo obraz o ile był on wartością truthy.<br>

```

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <img src={logo} />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
```

## Testing

Jeśli chodzi o testowanie aplikacji zdecydowałem się na użycie vitesta i testing library. Skupiłem się na testowaniu kluczowych komponentów z perspektywy użytkownika (głównie poprawne ich renderowanie) oraz kilka ważniejszych hooków. Żałuję, że nie zacząłem pisać testów szybciej, ponieważ wydaje mi się, że mogłoby to przynieść bardzo dużo wartości dla projektu oraz pozwoliłoby mi to szybciej nabrać szerszej perspektywy na wytwarzanie oprogramowania.

## CI/CD

Wcześniej wymienione testy wykorzystałem aby przygotować proste workflow przy użyciu gitHub actions i vercela: 
- Przy każdym pull requescie kod który wprowadza jakieś zmiany w projekcie jest testowany.
- Potem o ile testy przebiegną pomyślnie tworzony jest nowy build.
- Na końcu build jest deployowany przy użyciu vercela i aplikacja w paredziesiąt sekund jest gotowa to użytkowania na produkcji.
