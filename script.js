const actionsData = {
    'eclairage-etude': { titre: 'Étude faisabilité éclairage LED', description: 'Lancer une étude de faisabilité technique et financière pour l\'installation d\'éclairages LED sur les courts 3 et 4. Comparer les solutions solaire vs raccordement électrique. Identifier les contraintes réglementaires et les impacts sur les riverains. Préparer un cahier des charges pour obtenir 3 devis d\'entreprises agréées FFT.' },
    'plafond': { titre: 'Réparation plafond club house', description: 'Relancer la mairie de Quincieux concernant la dégradation du plafond du club house. Cette réparation est bloquante pour les travaux de rafraîchissement prévus (peinture). Demander un calendrier d\'intervention et un engagement ferme.' },
    'fuite': { titre: 'Réparation fuite toit', description: 'Signaler à la mairie de Quincieux la fuite au niveau du toit qui crée des zones glissantes dangereuses. Demander une intervention rapide pour sécuriser les installations. Joindre des photos si possible.' },
    'sanitaires': { titre: 'Réparation sanitaires Saint-Germain', description: 'Relancer la mairie de Saint-Germain concernant l\'état dégradé des sanitaires qui bloque l\'organisation de cours et stages sur le site. Établir une liste précise des réparations nécessaires et demander un calendrier d\'intervention.' },
    'serrure': { titre: 'Réparation serrure court couvert', description: 'Signaler en urgence le problème de serrure du court couvert de Saint-Germain qui entraîne des intrusions. Demander une intervention rapide pour sécuriser le site et protéger le matériel du club.' },
    'sponsors': { titre: 'Préparation dossier sponsors', description: 'Créer un dossier sponsors professionnel comprenant : présentation du club, projets 2026-2028, grille tarifaire avec 4 formules (Premium, Or, Argent, Soutien), contreparties détaillées, et liste de prospects locaux à contacter (30-40 entreprises/commerces).' },
    'equipe': { titre: 'Constitution équipe projet', description: 'Identifier 5-7 personnes motivées pour piloter le plan pluriannuel. Définir les rôles et responsabilités de chacun. Planifier les réunions de suivi mensuelles. Préparer le calendrier et les objectifs de l\'équipe.' },
    'tournoi': { titre: 'Organisation tournoi multi-chances', description: 'Lancer les inscriptions pour le tournoi multi-chances qui se déroulera de novembre à janvier. Créer le tableau, planifier les matchs, communiquer le règlement. Assurer le suivi hebdomadaire et planifier la finale avec remise des prix fin janvier.' }
};

window.onload = function () {
    if (sessionStorage.getItem('atqsg_logged') !== 'true') {
        window.location.href = 'login.html';
    }

    // Theme initialization
    const savedTheme = localStorage.getItem('atqsg_theme') || 'style.css';
    document.getElementById('theme-stylesheet').href = savedTheme;

    loadTodos();
};

function toggleTheme() {
    const link = document.getElementById('theme-stylesheet');
    const currentTheme = link.getAttribute('href');
    const newTheme = currentTheme === 'style.css' ? 'style2.css' : 'style.css';
    link.href = newTheme;
    localStorage.setItem('atqsg_theme', newTheme);
}

function loadTodos() { const saved = localStorage.getItem('atqsg_todos'); if (saved) { const todos = JSON.parse(saved); Object.keys(todos).forEach(key => { const checkbox = document.querySelector(`input[onchange*="${key}"]`); if (checkbox) checkbox.checked = todos[key]; }); } }
function saveTodo(checkbox, id) { const saved = localStorage.getItem('atqsg_todos'); const todos = saved ? JSON.parse(saved) : {}; todos[id] = checkbox.checked; localStorage.setItem('atqsg_todos', JSON.stringify(todos)); }
function showTab(tabName) { document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); document.getElementById(tabName).classList.add('active'); event.target.classList.add('active'); }
function openModal(actionId) { const action = actionsData[actionId]; if (!action) return; document.getElementById('modalTitle').textContent = action.titre; document.getElementById('modalBody').innerHTML = `<p>${action.description}</p>`; document.getElementById('actionModal').style.display = 'block'; }
function closeModal() { document.getElementById('actionModal').style.display = 'none'; }
window.onclick = function (event) { if (event.target === document.getElementById('actionModal')) closeModal(); }
