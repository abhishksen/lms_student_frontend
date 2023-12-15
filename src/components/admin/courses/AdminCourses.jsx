import { Box, Grid, Heading, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../xyz/Sidebar'
import CoursesRow from '../xyz/CoursesRow';
import CourseModal from '../xyz/CourseModal';

const AdminCourses = () => {

    const courses = [
        {
            _id: 1,
            title: 'React Development',
            category: 'Web Developement',
            poster: {
                url: 'data:image/jpeg;base64,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',
            },
            createdBy: 'Abhishek Sen',
            views: 123,
            numOfVideos: 12,
        },
        {
            _id: 2,
            title: 'React Native Development',
            category: 'App Developement',
            poster: {
                url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDQ0NDQ0NDQ0NDg0ODw8NDg0OFREWFhURFRUYHSggGRomGxUVITMhJSsrLi4uFx8zODM4NystLisBCgoKDg0OFxAQFysdHR0tLS0tLSsrLSsrKzErKysrKy0rLS0rLS4rMCstLS4tLSsrLSsrLS4tLSs3LS0vLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBgUEB//EAEQQAAICAQIDBQQGBwUHBQAAAAECAAMRBBIFITEGE0FRcSJhgZEUI0JSobEHMjNicoLCQ5KistEkY8HS8PHyFRZTZOH/xAAbAQACAwEBAQAAAAAAAAAAAAACAwABBAYFB//EADwRAAEDAgQDBgIIBAcBAAAAAAEAAhEDBAUSITFBUWEGE3GBkfAiwRQyUmKhsdHhM0KCohUjJDRywvEH/9oADAMBAAIRAxEAPwDFGRjjhr6SkJYDIRSRKsOhWiTErUywRZWlmycUIGRGUjFGYoQSzqjEMR4jklTKo4jxDEJCoAliGJKEpFCjiGIzFIhhIxYkooaAhRxImWStoQSnKswCyWJICHKUGSkBJwiMiZEJEyGYOYhCCS52qlAiAhKlEAqyIRmKEEkpSJjMRloClCEJaWvTCKBMz5VvzIJgshmTWWRCprpKsEmJAScUVqaUZhmKOQBXKICRkhIVAVKKEIKNElIxyKwiBjikVlKElFJKqEjFAxGGllImVmSJhiGNEh2qQElCOSVYEJRGSkGklQ7KtoSUIyVnhISWZGOUrCgYo4S5S4lLEjiTxEZcqiFDEcI4SCFLdIFpSWjDQskJffSrllqylDLVMBzVopOVojkAZIGJLVsa5ThFHBTEhJQEcAo2pRwhKRL1aHRve+xAeZ8MlUXzPmPGabT9n6FGLO9dgf1lK7B7hkE4lfZXTAUmzxsc1D+HCMQPiV+RmR7Q6zUay+wLa6aetnrrVXbaQrFd5A5Enr8Ztp06VKkKtRuYu2G23H34L51i2J4piOK1MNw6r3TKI+N4EkkxoDwiYABbqHGYgDZans9p25VixMeL7WX8gR8pw9fwS6nJUC1B9pcsPngAeh5zPaXVa7TnNWotZR9hi1lRHlsY4mr4H2xquIq1Srp7iAueQ09h5dST7PoeXvhAWtbQA03eo9+nmshxHtJgxz3H+rpcZEPA5ggT694Og3XBiJmr4zwMWA2UDbZhi1eMbxzJKgD8P9ZyeFcFa5s2ZSoEAnnuLeKjl1x8vjEOtqrKndka8I4++sQuxte02G3Vk69bVDWM+tm+s08AQJ1P8sTm4SvDpNHZc2K6yxJ6gE4XP63rznf0nZheTXPvz9irBA+JH+s9fEuJ6Xh9Q3cuXs1Lt76046noMcup5TFcR7Sa7VkitjpKieS1FkZh+9ZnJ+GBNXdUKH8U5nchw8T+646p2hxjGXluFs7mltncAXO4abgf0gx9sHRbg9n9L02XD1avd89mJwONcENIDpl6i3PrvQ8ztJxy5Dr/ANDKDTahG71LrRaOe5XcHP8AFPpHCtSNZpFawDe9TVvy9nvxy3Y9Qp+MtgpXIc1jMrgJHXp757pD7zGMArUqt7XNeg9wa/MNWzxbqToASIMGII1CxOJKSdcMwHLDEfjIzzpX1ItgwlIGSMjCCW5RhHHDlKhRiJjxEZJQkFREYEkISyVQaEsRFZKEqVeUKG2EcISDKF48QxJYjxNsLxs6FzLlaQUR4gFqdTrEK5WlgaeWSUmB3YWxl0OK9QMYMpDmMWRTqRWttdp4q6OVh5LfANMp7arealAmRLxb4osIR94Oa23AG/2RcdQGb4j/AMJialwCP3m/ObHsrYH0gH3bXpPuyFP9UyNqlWIPgxz67iJtuh/k0PA/9VwHZJ0Yti+bc1AfIuqn5ozPJqtGrjod09E9vCdAdRYFHJF5u5HsisEZJ9/P8hMYYSQBxXb3dajTovqVyAxoJJPADiul2H1Grw1NgFmlrH1dzk7w2BtrX7wx8vkJouKPclNraatLLgrsiNnBOMlve3jjxnO4/wAWTQUBa1VrnU10VdSWx+0YeXIE+ZPy4PZPtHalnca1iwusZq7nOStjEewx+4T08jjw6ey2q2iG0HPMnjynYfovhFzY1sQfWxO1t4oh0hpmXAbkx/dB4kCSCTwl01llht1LtZczEncxZicnl7hPYoA6TVdpeE7g19ajcOVijoW5tvwB88+vmBlszyK1J1J5a7f8+q+zdn7uzvLJle0ENOhGktI3aY5aRwIggapGa3sauNO48DqSw+Ndf+kyZmx7LJjTZP2tSSP4dlePzM0Yb/uB5rwf/ogb/grp3ztj8flKzHFB9fcB0Fty/JzPGZfq7t9tjjo1rkem8t/xnnMxcV2FuCKFPNvlE+MCVEwkojClGlCEJaqESsyRgRCCW7VKOKMSIWpwxGBGBBlNAVeI5KEuUOVeTEMSzEWJ7JaubUVkoCSiy1XKiJJRCCmLLUYcpgRMsYkoKa18KAkgYiJJRnkBknwklbGVJTkkrLHCqTnkAozmaDhXZsth9Qdq5yKwMOR6Ecp1dVrdDoFw701ED9QYfUH4cyBy9wjfo+ZuZ3wjmff6LnMQ7Y2lrU7i3abir9lm08i7X+0O6kKnstpr6VsS6pq1NosTcu3cSMNyIyeidI9V2dV7rLGsbFj2OEUA+yzEgHPr4Gc7Rdua7tTVTXRYlV1gr721huBYkL7Kkjrt8fGWdubdYi1Ppb3qrLGq3Ydp3c2Vt2M9N3j9mFlodz9sM8t/MaariKV5i7cWc6lltqt0NoDhAHUO1OXWRMnhK6adntMP1lub3lk2/wCUz2VUUaVWOaqa/F7GVBz5DczHH8vvmX7G8KuZvpOrtuu2kpQl1j2YfkTZz8ug9+fKc/tnxD6VcNPWfqdOxNmOj381ZvQcx85YqU6VLvW08pO3M/px9kBVWoYriV+cOq3b6gbq/cNaRwygwSDHAazoMpWnv1XC7H7x9Rw2ywgLufUUucDwHtcpG27hTjDXcLI991A/qnzxOEA9Ax9MmW/+hkdQ49QRMzr4TrTb78l0NHsRfhmVl3VA5AkD0mF9R0et01vsU6ii/CbSqXV3sUxtJb2iWlL8D0pOTU+TzJr2r+YM+b6fSvprEvpb6yohxz5HnzB92M/Ob7WU18R0aPW5rcr3tTBirVagDG0sPUg/3o+nWZdNcHUwXN2HPwMaf+Ln77DMQ7O1qfdXT6dOqQC4SAD95oMGBqCdYnzr1HZmpj9W1qD97aR8/wD8nRo0po0zVp9Y6VWlNv27SCV25HntmG4UeJrqUo+lagL3oVwzvZtTdhjtfPQZ+U1vabj40S1Ns7w22kbN2wmsA5boep2fOVbOt8rqrWlkaTqd421KLHzjbqlHDruqK+Y52thoJjMNTDdCC7UuOx2hZW7Q21crK2Q5J5oVYc/LGZ5jNVw7tbodT7Dt3Tnls1apsPo3Nfntl3EOztVgzT9Wx54J+qb+HHP/AK6zH9BJbNFweOm/ou0s+3NHvBQxKi62eeJksPnEgdYcOblj5GenWaSylitilSD1IIz+9+E88yLtmva9oc0gg6ggyCDxBGh8kooRy5USxAwhIFRUZIQkhLJVAJSUURgI0oQhClAokSBEtMjidFlXOEqqMRkQxAyIJREDAiKA5iuVYDGDK8xgxJaiDlMzV9k+FLtGocAtuIqB6DGDvPx5D0z4CZMmbrRk28OApJDvonrQryxeUZBjyO7Mu3aC+SJgSub7WX9a3sQyk7L3rgwu5Agk68JiCeUrPdpO1rszafQHoWSzU9SSpOe6Oen73y8zmq+H5Jawl2Y5bccknzJMu09AT2cYIOCD1B8p6BM73OqOzv1+S9XCsGtsOpZGN14nifH5DYcl57aQF9jkQQQRyIx0M+iUOuu0anKg21h2zzC3qOfP+LcPSYIia7sPRYlFhY/Vtf8AVrz3BggDk/u52/FTNFv9YtI0cNffqvI7YtyUKN7SdlqUHgt8yPXUA+AKt7Ta8aPShKfZtdfo1PmPZ9px6AbuXiwmM4Xoy7JUmSzuFx55bkPmZ3O2umsOpqd+dXcqteM4UgkMD78Ef4fKeTs6wXV07sDcTWufvHIX8dsXXBfVynQDQfhr74QmdmqbbHCat/Oeo9r6h6locQ0+YIP3i5bPhvC66FCoiFuhsK723DrtPgs9T0qw2squD98bz8PL1EnCeq2m1rcoGnL3v5r5ZXvrivW+kVahdU3zTqPA8I4AQBwCyHaLha0kNUD3b4Ug9ayTzU/IfP5eXslr+4vOnc/Vag5qz0F/shP7w5eoWd3tbao06gkbnvG0eOBWxP5rMf8AR3tZEq394XXZzIywIxtPynhVh9GuCafDh48F9jsSe0PZ4C7Px/EMx5tJyv8AynmQecL6GuiUWtdgFnq2eGe8JJLdPL8SZie0upF+rcHJTTr3Q8QWQnvD88j+UTc7LO6xur7/AGY349jvdv7TH3d3PE+cGh6iyuGLhzuHVs5I5/Gab+GNDGiA4knx9lc52FY6+vXXNd+c0KbWN6N1APgACOeuvBeTUcPRvDBno4VxrVaEgZ77T59qpyWUDlzQ59k/h7pKJgCMGeaxzmODmmCvo2IYRa3tM06rAQffkeo1W6D0cQ04dOYYbULY31WY/ZseeBz5gevkZi9TSa7GRgQVJU5GDybofiJoOw2isqW5jkVWPVsU+L7MnHvwVHwnK7QWq2quK4P1linH3gcP+Imu6h9NlaILtD1if09I5LkeyTqtliF3hJfnp0vibxyyRLfPNqPtNJ0lwXOECYRZmFfQZ0RmMSJk1WQ6KgCSgCSxHFBlNDYRIyUiZFClCOEtLUcwhiE6vKuNFQhGIwI4CXkV96ltkGSXRESixTvFUK4d1LgJICCaQRCqV5zWZ0ey/HRpbDRqDjT2sHS09KbTgDP3VP4Hn5yiUanThxgxLqMfEzQj3qsuIWlO+oOo1RofUHgR1H7HQkLY8a4Al+baSq2MC5A/ZW9TuBx1J+B/E5TUaZ6mKWo6MOoYEH159R75Twjjuq0GE5X6YH9k5yUH+7bPs+nSbDQ8f0GtUIzVq5/stTtSzP7h6E+hiopvOvwu5fp78lzVDEMRwdoo3TDXot2c36zR16DkY5B8AAZKlCzKFGSxVQB4ktjHzmy41rPoGizXgWqiaeoHo95B9ojx6O3wltPAKa7ktr7xSjh9r4KZ5454z1GfHpPH2s4ZfqDUKtpqTe7qWVWNhyMEHyH+aMNJzGuy7nT3+azYli1pi11aUQ/LRBzPL/hE8jJjYRoY+Pc8PY+zX6RXT+0r71F8Uvx+z+ZZD8DMHq1dem5HrbI+yyurfmCs0XZanU6S40XUXfRtQdyWitmrquwAMtg4BH4hfOXdrOGYIvQH2ji0D/5DklvQ/n6xNVneszEajQrXgV02xu6mGOeHU3mabgQQZH1ZGmo/uB+0jgnbOh1Catxp7wMOzDbS7ffB+z6GdDV9qtDUu76VVYfuadltsJ8gB/VMBqNCG6qc+hlCcMUHOD+MAXNZojQ9Uyt2JpOq5mZmt5D5Egkfiunr+MPrLhYy7K0UrRX4BBnLH3n/AEmm7I8P5G9gfFUHT2uTbvgOX83ume4Vw5rrURVIBI3MwOFXPNifLnNlxayyjTd3pKrLLmU00iusvsO3na5HJcdefVsQKNOXGq/WNT1Pv5Lf2hu24fYU8ItIa+qI3jKwnWSds2oJPDPOup8lHaLfxF9KMdytBRW89UjZYZ8sbl9Vng7YaULYtoz9aoNhxy7zJyf6vjPDw3szq0atx3dVtdgtXvLMHIYMAeW7w/GbTiGgS9AloYAXCzK7d36rDb7XvwYeSrXpOD2wZkcN+HlqvFoXFlgGKUH0awqUnMy1cpDoMb/CTEuDTG+jhxXzpATyUE+nOaLhHZpmIbUewAQwrAK2MPLaR095/HpOtZZodCPbaiokAgW7TefeoGT8QszHFe3L2Zr0FZUHl39gUuP4ADgepz6RJtqVLWs6fuj5+x4r3LjtZf4lNLCaBaDp3r+H/EatB6y88mg6ru9o+OV6Kruqin0hk2pWuPqR4WMPh8W5zGUqQvMknJJJ5knzM8+m05yXsZnsLEsdxdwfMkz1TNXrGs6SIA2HJe/2cwNuGUnOcc1Spq5x3J9k76ySSZKcIQAiF0yaLLjIrGYo6rQwQEjFAxSKilEYRS0BKeYSMJaCVOGIRgTsFxKIASeI8QgEEqOIERxGUQrBQI4RykSJAmTxHtgFso8yrKA9RPDqeFq3TlOoBDEF9BrxDhKhIO67n6P9LYlVxey11FqVVozuUQIm47VPT9cfKc3V9t9TVqL0+j0WU13XVpgOluxXIBLbiOg8ppOzHLSA+dlth+YX+iYalMrluZJ3E+ZPMmINEhoYwxEri7OwoX2JXrqrZDHAAajmDsQZ+DzkruU/pDq/tdLep/3bo/8AmAmg4D2go1ofue+rasjdXZtWwj742scr4TCnTIfsiVVu+ltTUafkyEbl57XXIyjfumATXpmScw8NfJa7zsnavouNv8LuAkkHoZnfnw34Qt5xXtBptK4TUm9SyixTsaytgfI5nj/96cO8LLiTyAFVmSZ6Sum4tpQccj03YNmn1G3mrfPp4jn92c/s72TWmzvr0BeuxlqTG4Bhgi3/AJfn5S3PuC4ZCC07GD+q5e3tMLFrUfclzKtPQskAuPCJaf6t8sTsQtK+oVKzbYXrRa+9bvSQaxjJ3DzmSt/SJp/7PT6s+W41p+Rac/thxv6VZ9FoOdPU2bXB5XWgkEDzUH5n0WcddOo8BE1rp5dFM6Djz/b3tC97AOylK4oirdiM2obqNOsayfHQROsrs6n9IGob9jo6199he4/IFZqOz2ts1miLWkJa/f0u1RNe1vAgjocMkwageU2fYc/U2L/9lW+daD+mBbVKjqoD3SDPvTwWztP2etLDDTWt2gOa5uupMajckncj8OQWAHDTuYuWLbm6nJ3Z55M9ldYXoJ7+LjGovHlfev8AdcieOYO7DdAvo9q2mWNqMEZgD6ifmmI4hJQCtzUxJCRjES5PapiMyMMwITJQZAxmIy0BKIGRzETCCWSnmEWYS4QSrBJgQAkp2QauKlKSihLVIigYoJUUswAiUS0CWGyoXQgCIycrMIt0QhycJGODCLMtd2YO7R48d11fxLMf6hMdUuFAIwRyI8jO92M1wWy7TNyJb6TWT44VUcD5Ifg0OM8FtFjtVWzpYxsARSzVszFihAGRzzEMiSuXw6sy0xO7o1SG94Q5smAdXHSePxfgVwTIsuZ1tPwHUuead177d1YHwxn8J3tHwmjSr3trIzIN7XW4FSeRAI5ep5yOAXrXeP2do2M4e7g1pkzyJEhvnr0J0XM7IcBu07ve1j1pahH0YAgvnG12B6Y8PHn8J3Ncg1VF9dGo2lt9LWVHcUs+2hPh5Hx5zH8f7XPqM0aHclR5PqDkWP5hB1Vff19Jw+GavUcPfvKDuQ472l/1LF9/kfI/9phNVrRDWy3WT48vfgucfg9/fl16+GVNC1kctgZmD0cDP80DQX6nhb6Vu7sXBH6rcyrjPJlPiOUqBm94fxPR8Tq2kZb7VNmBdT++vu94+PlONxPslapJ0zCxc8kZtto+A5H8PSLdR0mnq3ouhw7tJRee5ux3FVu4do09QdhP3jHJxWczNv2Jr/2dn+9qAPlWv/NMtVwPVswX6Ncv7zVsqj+YjE2OosXh+iOSN1aHHiH1JHID4/4VlW7SH5zoGyh7W4jTr2LbOi4PqVXNAAIOgPGNpMATvryKxvFbN+o1DDmG1GoI+NhP/GeaU1cl59STmTzMYXe0GinTawfygD0CmDLAZUDJCA5q1NcrISIMeYhwTw5SzFCImDCOVLMiZEmGZIQFycRizIky4SyU8xRZhCQ5l7I4oTslxcpxRyBMEq0MYARZltawWiSrJgKarJyIjjwEklIysyTGQgOKJqcIpKRWvNqq3ytlTFLazuVl5EETq6Pt7Yg26vTFmHWyhtu7+U9PnPHIvSp6gTNVtyXZmOg/msF7htveR3zJjY6g+oj026L26rt9Y2RptGoPg97F/wDCm385xNS2p1jBtXazgHKJkrUnX9VByHr1ntWpR0Ajixak/wAR2bpsENphVpbHNSpgHnqT6mY8oVdNCoMARuoMkZAxzmACAvXY6FztRoiGD1M1bqcqUJRlPmGHSdXQ9ttZQNuorr1Kjo5+rt+LgYPylDSmxAeomB9DKS5hyn3w2We7w62vBFZgdHvQiCPIrQP+kSrb7OkvL/dLoEz/ABYz+EznEuL6jXWB7sJWhOyhdwrHXmfNvfIdwvkIYiXtqP0e6R6LPYYDZ2dTvKbPi4EyY8JJj8+sKQkgZXGDEuokbLqaVxzVgMnK4wYkhbmPBVkcrzHmJITw5S3Q3RZizByq86ZaLdIwlQhLlLMgTHmKXCEuRCKKRCuhAwiJnYlcigyDGDGRiXFGFZWJcJWknGtEBLcdVOImLMCYRQwkxiEjJCL3RIEcUISpEcUJSiIjCEitRMiZIyJgORBRaUNLWlTGZaie0qBkTGYRKbKUMSUUqEbSgGBMJEmZ6lOVqpvI2Ug0eZSYAzIWLWKyvzDMp3Q3yi1H3wV2YsykvDfFlqnehW5iLSrdFJlQmqrN8JXmEuAg7wrrEyDNHCdU5c6FVmSWOEVxTCrRJ5hCaAkozIsY4SioFESUISgoUoQhLVIhCEpRKBhCQq1EyJjhFuVhUuZQTCEzVN09iIQhFpicUISlYSlbGOEWVpaowjhMzwnJQMIRauVEmKEIoqwiEISlaIQhIqlf/9k=',
            },
            createdBy: 'Abhishek Sen',
            views: 123,
            numOfVideos: 12,
        },
    ];

    const { isOpen, onClose, onOpen } = useDisclosure();

    const courseDetailHandler = (userId) => {
        console.log(userId);
        onOpen();
    }

    const deleteButtonHandler = (userId) => {
        console.log(userId);
    }

    const deleteLectureButtonHandler = (courseId, lectureId) => {
        console.log(courseId, lectureId);
    }

    const addLectureHandler = (e, courseId, title, description, video) => {
        e.preventDefault();
        console.log('add lecture')
    }


    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box p={['0', '14']} overflowX={'auto'}>
                <Heading
                    children='All Courses'
                    textTransform={'uppercase'}
                    mb={'14'}
                    textAlign={['center', 'left']}
                />
                <TableContainer width={['100vw', 'full']}>
                    <Table variant={'simple'} size={'lg'}>
                        <TableCaption>All available courses</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Poster</Th>
                                <Th>Title</Th>
                                <Th>Category</Th>
                                <Th>Creator</Th>
                                <Th isNumeric>Views</Th>
                                <Th isNumeric>Lectures</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courses.map((item) => (
                                    <CoursesRow key={item._id}
                                        item={item} courseDetailHandler={courseDetailHandler}
                                        deleteButtonHandler={deleteButtonHandler} />
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>

                <CourseModal
                    isOpen={isOpen}
                    onClose={onClose}
                    id={"courseId"}
                    courseTitle={"courseTitle"}
                    deleteButtonHandler={deleteLectureButtonHandler}
                    addLectureHandler={addLectureHandler}
                />

            </Box>
            <Sidebar />
        </Grid>
    )
}

export default AdminCourses

// function CoursesRow({ item, courseDetailHandler, deleteButtonHandler }) {
//     return (
//         <Tr>
//             <Td>{item._id}</Td>
//             <Td>
//                 <Image src={item.poster.url} />
//             </Td>
//             <Td>{item.title}</Td>
//             <Td>{item.category}</Td>
//             <Td>{item.createdBy}</Td>
//             <Td isNumeric>{item.views}</Td>
//             <Td isNumeric>{item.numOfVideos}</Td>
//             <Td isNumeric>
//                 <HStack justifyContent={'flex-end'}>
//                     <Button onClick={() => courseDetailHandler(item._id)} variant={'outline'} colorScheme='purple'>
//                         View Lectures
//                     </Button>
//                     <Button onClick={() => deleteButtonHandler(item._id)} colorScheme='red'>
//                         <RiDeleteBack2Line />
//                     </Button>

//                 </HStack>
//             </Td>
//         </Tr>
//     );
// }