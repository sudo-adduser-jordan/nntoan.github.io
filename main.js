var header = `

    |                                               $$\\
    |                                               $$ |
    |                 $$\\  $$$$$$\\   $$$$$$\\   $$$$$$$ | $$$$$$\\  $$$$$$$\\   
    |                 \\__|$$  __$$\\ $$  __$$\\ $$  __$$ | \\____$$\\ $$  __$$\\ 
    |                 $$\\ $$ /  $$ |$$ |  \\__|$$ /  $$ | $$$$$$$ |$$ |  $$ |    
    |                 $$ |$$ |  $$ |$$ |      $$ |  $$ |$$  __$$ |$$ |  $$ |      
    |                 $$ |\\$$$$$$  |$$ |      \\$$$$$$$ |\\$$$$$$$ |$$ |  $$ |   
    |                 $$ | \\______/ \\__|       \\_______| \\_______|\\__|  \\__|
    |           $$\\   $$ |
    |           \\$$$$$$  |
    |            \\______/ 
    |                      
    |    Software Developer
    |                                                                                                                    
`
var menu_banner = `
    |
    |    Please type menu for a list of commands.
    |
`

var motd = `
    |
    |    "A byte of time is a byte of gold, but you can't buy that byte of time, with a byte of gold.”
    |
`

var system_info = `
    |           
    |                -/oyddmdhs+:.                      user1@computer1
    |            -odNMMMMMMMMNNmhy+-'                   ---------------
    |          -yNMMMMMMMMMMMNNNmmdhy+-                 OS: Gentoo Linux x86_64
    |        'omMMMMMMMMMMMMNmdmmmmddhhy/'              Kernel: Linux 6.12.25-gentoo-dist
    |        omMMMMMMMMMMMNhhyyyohmdddhhhdo'            Packages: 950 (emerge), 7 (flatpak)
    |       .ydMMMMMMMMMMdhs++so/smdddhhhhdm+'          Shell: zsh 5.9
    |        oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.         DE: Xfce4 4.20
    |         :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh         WM: Xfwm4 (X11)
    |           .:+sydNMMMMMNNNmmmdddhhhhhhmMmy         Theme: Adwaita [GTK3
    |              /mMMMMMMNNNmmmdddhhhhhmMNhs:         Icons: win10x
    |           'oNMMMMMMMNNNmmmddddhhdmMNhs+'          Cursor: Adwaita
    |         'sNMMMMMMMMNNNmmmdddddmNMmhs/.            Terminal: xfce4-terminal 1.1.5
    |        /NMMMMMMMMNNNNmmmdddmNMNdso:'              Terminal Font: NerdFont NF 
    |       +MMMMMMMNNNNNmmmmdmNMNdso/-            
    |       yMMNNNNNNNmmmmmNNMmhs+/-'              
    |       /hMMNNNNNNNNMNdhs++/-'                 
    |       '/ohdmmddhys+++/:.'                    
    |         '-//////:--.                         
    |           
`

var Commands = {
    print_banner: false,
    menu: function () {
        this.echo();
        this.echo('\t|   motd               - Display Message of the Days');
        this.echo();
        this.echo('\t|   about              - Summary of me');
        this.echo('\t|   fastfetch          - Get my dev environment value');
        this.echo('\t|   projects           - Recent projects of mine');
        this.echo('\t|   skills             - What I can do');
        this.echo();
        this.echo('\t|   github             - Das github');
        this.echo('\t|   linkedin           - How I connect for work things');
        this.echo();
        this.echo('\t|   contact            - Contact me');
        this.echo('\t|   credits            - Credits for this website');
        this.echo();
        this.echo('\t|   clear              - Clear screen');
        this.echo('\t|   all                - Run all commands');
        this.echo();
    },
    motd: function () {
        this.echo(motd);
    },
    about: function () {
        this.echo();
        this.echo('\t|   Name:         Jordan');
        this.echo();
        this.echo('\t|   Location:     United States, Remote');
        this.echo();
        this.echo('\t|   Vocation:     Software Developer');
        this.echo('\t|                 Experienced in multiple languages, tools, and environments');
        this.echo();
        this.echo('\t|   Employment:   I am currently seeking a Remote position.');
        this.echo('\t|                 Get in touch if you\'d like more information \t sudo.sendmail.jordan@gmail.com');
        this.echo();
    },
    fastfetch: function () {
        this.echo(system_info);
        this.echo();
    },
    projects: function () {
        this.echo();
        this.echo('\t|   Code Racer \t\t\t\t\t\t\t https://github.com/cody/code-racer');
        this.echo('\t|   Linux Themes \t\t\t\t\t\t   https://github.com/linuxthemes');
        this.echo('\t|   Runelite Plugin \t\t\t\t\t    https://github.com/runelite');
        this.echo('\t|   Bottles: Eve Online Launcher \t\t  https://github.com/ohmybash/oh-my-bash');
        this.echo();
    },
    skills: function () {
        this.echo();
        this.echo('\t>  Languages');
        this.echo();
        this.echo('\t\t\t  \ue61d \t\t\t\t Javascript');
        this.echo('\t\t\t  \ue738 \t\t\t\t Java');
        this.echo('\t\t\t  \ue73c \t\t\t\t Python');
        this.echo('\t\t\t  \udb81\udfd3 \t\t\t\t Go');
        this.echo('\t\t\t  \udb81\ude72 \t\t\t\t C++');
        this.echo('\t\t\t  \ue61e \t\t\t\t C');
        this.echo('\t\t\t  \ue760 \t\t\t\t Bash');
        this.echo();
        this.echo('\t>   Frameworks');
        this.echo();
        this.echo('\t\t\t  \ue7ba \t\t\t\t React');
        this.echo('\t\t\t  \ue8ac \t\t\t\t Spring');
        this.echo('\t\t\t  \udb81\udebf \t\t\t\t Angular');
        this.echo();
        this.echo('\t>   Platforms');
        this.echo();
        this.echo('\t\t\t  \ue7e6 \t\t\t\t Linux');
        this.echo('\t\t\t  \ue70f \t\t\t\t Windows');
        this.echo('\t\t\t  \uebaa \t\t\t\t Cloud');
        this.echo('\t\t\t  \uf21f \t\t\t\t Docker');
        this.echo();
        this.echo('\t>   Tools');
        this.echo();
        this.echo('\t\t\t  \ue8da \t\t\t\t VSCode');
        this.echo('\t\t\t  \ue745 \t\t\t\t Librewolf');
        this.echo('\t\t\t  \uf092 \t\t\t\t GitHub Desktop');
        this.echo();
    },
    certifications: function () {
        this.echo();
        this.echo('\t|   Java Developer \t\t\t\t https://github.com/sudo-adduser-jordan');
        this.echo('\t|   Java Backend Developer \t\t https://github.com/sudo-adduser-jordan');
        this.echo('\t|   Java Desktop Developer \t\t https://github.com/sudo-adduser-jordan');
        this.echo('\t|   Java Spring Security \t\t  https://github.com/sudo-adduser-jordan');
        this.echo('\t|   Python Developer \t\t\t   https://github.com/sudo-adduser-jordan');
        this.echo('\t|   Go Developer  \t\t\t\t   https://github.com/sudo-adduser-jordan');
        this.echo('\t|   Front End Developer \t\t    https://github.com/sudo-adduser-jordan');
        this.echo('\t|   Javascript Developer \t\t   https://github.com/sudo-adduser-jordan');
        this.echo('\t|   Linux Certified  \t\t\t    https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    github: function () {
        this.echo();
        this.echo('\t|   https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    linkedin: function () {
        this.echo();
        this.echo('\t|   https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    contact: function () {
        this.echo();
        this.echo('\t|   Phone:         420.420.6969');
        this.echo('\t|   Email:         sudo.sendmail.jordan@gmail.com');
        this.echo('\t|   LinkedIn:      https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    credits: function () {
        this.echo();
        this.echo('\t|   Forked and refactored from:  https://github.com/nntoan/nntoan.github.io');
        this.echo('\t|   Using Jquery Terminal Emulator by Jakub Jankiewicz: http://terminal.jcubic.pl');
        this.echo(menu_banner);
    },
    all: function () {
        this.print_banner = true;
        this.clear();
        this.echo(header);
        this.exec('motd');
        this.exec('about');
        this.exec('projects');
        this.exec('skills');
        this.exec('certifications');
        this.exec('fastfetch');
        this.exec('contact');
        this.exec('github');
        this.exec('linkedin');
        this.exec('credits');
        this.print_banner = false;
    },
    clear: function () {
        this.clear()
        this.echo(header)
        this.echo(menu_banner)
    }
};
jQuery(function () {
    $('#terminal_').terminal(
        Commands,
        {
            prompt: '[[g;#00FF00;]user1@computer1 [[g;#0000FF;]~ $] ',
            completion: true,
            checkArity: false,
            greetings: "",
            clear: false,
        }).exec('all')
})

setTimeout(function() {
    $('#terminal_').find('.terminal-scroller').animate({ scrollTop: 0 }, 700);
}, 50); // delay to ensure content is rendered
    
